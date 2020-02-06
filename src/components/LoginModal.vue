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
    <md-field class="md-form-group" slot="inputs">
      <md-icon>email</md-icon>
      <label>Email...</label>
      <md-input v-model="email" type="email"></md-input>
    </md-field>
    <md-field class="md-form-group" slot="inputs">
      <md-icon>lock_outline</md-icon>
      <label>Password...</label>
      <md-input v-model="password"></md-input>
    </md-field>
    <md-button slot="footer" @click="submit" class="md-simple md-success md-lg">Log In</md-button>
  </div>
</template>
<script>
import GoogleLogin from "vue-google-login";
import { LoginCard } from "@/components";
import facebookLogin from "facebook-login-vuejs";
import router from "../router";
import { mapMutations, mapGetters } from "vuex";
import axios from "axios";

export default {
  name: "login-modal",
  components: {
    GoogleLogin,
    facebookLogin
  },
  data() {
    return {
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
          .post("http://localhost:3000/api/user/login/socialF", {
            token: res.response.authResponse.accessToken,
            email: response.email
          })
          .then(response => {
            console.log("hi facebook");
            this.UPDATE_LOGIN();
            this.$emit("update:isAuthed", true);
            localStorage.setItem("x-token", this.token);
          });
      });
    },

    onSuccess(googleUser) {
      var profile = googleUser.getBasicProfile();
      axios
        .post("http://localhost:3000/api/user/login/social", {
          token: googleUser.getAuthResponse().id_token
        })
        .then(response => {
          console.log("hi google");
          this.UPDATE_LOGIN();
          this.$emit("update:isAuthed", true);
          localStorage.setItem("x-token", googleUser.getAuthResponse().id_token);
        });
    },
    submit: function(e) {
      axios
        .post("http://localhost:3000/api/user/login", {
          email: this.email,
          password: this.password
        })
        .then(response => {
          console.log("====>", response);
          if (response.data.status === "success") {
            localStorage.setItem("x-token", response.data.details.token.refreshToken);
            localStorage.setItem("x-refresh-token", response.data.details.token.token);
            if (response.data.details.active) {
              this.UPDATE_LOGIN();
              this.$emit("update:isAuthed", true);
            } else {
              router.push({ name: "confirmation" });
            }
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  watch: {
    isAuthed: function() {
      console.log(this.isAuthed);
    }
  }
};
</script>
