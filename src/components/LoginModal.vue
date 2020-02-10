<template>
  <div>
    <h4 slot="title" class="card-title">Login</h4>
    <facebook-login
      slot="buttons"
      class="button"
      appId="2678136558938821"
      @login="getUserData"
      @logout="onLogout"
      @sdk-loaded="sdkLoaded"
      @get-initial-status="getUserData"
    ></facebook-login>
    <GoogleLogin slot="buttons" class="button" :params="params" :renderParams="renderParams" :onSuccess="onSuccess" :onFailure="onFailure"> </GoogleLogin>
    <p slot="description" class="description">Or Be Classical</p>
    <md-field class="md-form-group" :class="getValidationClass('email')" slot="inputs">
      <md-icon>email</md-icon>
      <label for="email">Email...</label>
      <md-input name="email" id="email" v-model="email" type="email"></md-input>
      <span class="md-error" v-if="!$v.email.required">Email is required</span>
      <span class="md-error" v-else-if="!$v.email.email">Invalid email</span>
    </md-field>
    <md-field class="md-form-group" :class="getValidationClass('password')" slot="inputs">
      <md-icon>lock_outline</md-icon>
      <label for="password">Password...</label>
      <md-input name="password" id="password" v-model="password" type="password"></md-input>
      <span class="md-error" v-if="!$v.password.required">Password is required</span>
      <span class="md-error" v-else-if="!$v.password.minlength">Your password should have a minimum of 8 characters</span>
    </md-field>
    <md-progress-bar style="width: 100%" slot="footer" md-mode="indeterminate" v-if="sending" />

    <md-button slot="footer" @click="validateUser" class="md-simple md-success md-lg">Log In</md-button>
  </div>
</template>
<script>
import GoogleLogin from "vue-google-login";
import { LoginCard } from "@/components";
import facebookLogin from "facebook-login-vuejs";
import router from "../router";
import { mapMutations, mapGetters } from "vuex";
import axios from "axios";
import { validationMixin } from "vuelidate";
import { required, email, minLength, maxLength } from "vuelidate/lib/validators";

export default {
  name: "login-modal",
  components: {
    GoogleLogin,
    facebookLogin
  },
  mixins: [validationMixin],
  data() {
    return {
      sending: false,
      email: null,
      password: null,
      params: {
        client_id: "533129668624-0iiemq738iusdp6tdq5791thhiks11fq.apps.googleusercontent.com"
      },
      logoutButton: true,
      // only needed if you want to render the button with the google ui
      renderParams: {
        width: 250,
        height: 50,
        longtitle: true
      }
    };
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(8)
    }
  },
  props: {
    modalCount: Number
  },
  computed: {
    isAuthed() {
      return this.$store.state.user.loggedIn;
    }
  },
  methods: {
    ...mapGetters(["auth"]),
    ...mapMutations(["UPDATE_LOGIN", "UPDATE_ACTIVATE"]),
    getUserData(res) {
      FB.api("/me", "GET", { fields: "id,name,email" }, response => {
        axios
          .post("https://prodigy-rbk.herokuapp.com/api/user/login/socialF", {
            token: res.response.authResponse.accessToken,
            email: response.email
          })
          .then(response => {
            this.UPDATE_LOGIN(true);
            this.$emit("update:isAuthed", true);
            localStorage.setItem("x-token", this.token);
          });
      });
    },

    onSuccess(googleUser) {
      var profile = googleUser.getBasicProfile();
      axios
        .post("https://prodigy-rbk.herokuapp.com/api/user/login/social", {
          token: googleUser.getAuthResponse().id_token
        })
        .then(response => {
          this.UPDATE_LOGIN(true);
          this.$emit("update:isAuthed", true);
          localStorage.setItem("x-token", googleUser.getAuthResponse().id_token);
        });
    },
    submit: function(e) {
      this.sending = false;
      axios
        .post("https://prodigy-rbk.herokuapp.com/api/user/login", {
          email: this.email,
          password: this.password
        })
        .then(response => {
          console.log("====>", response);
          if (response.data.status === "success") {
            localStorage.setItem("x-token", response.data.details.token.refreshToken);
            localStorage.setItem("x-refresh-token", response.data.details.token.token);
            if (response.data.details.active) {
              this.UPDATE_LOGIN(true);
              this.$emit("update:isAuthed", true);
            } else {
              router.push({ name: "confirmation" });
            }
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getValidationClass(fieldName) {
      const field = this.$v[fieldName];

      if (field) {
        return {
          "md-invalid": field.$invalid && field.$dirty
        };
      }
    },
    validateUser() {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        this.sending = true;
        window.setTimeout(() => {
          this.submit();
        }, 1500);
      }
    }
  },
  watch: {
    isAuthed: function() {
      console.log(this.isAuthed);
    }
  }
};
</script>
