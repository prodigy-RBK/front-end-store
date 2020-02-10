<template>
  <div class="wrapper">
    <div class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-33 md-small-size-66 md-xsmall-size-100 md-medium-size-40 mx-auto"
          >
            <login-card header-color="green">
              <h4 slot="title" class="card-title">Login</h4>
              <facebook-login
                class="button"
                slot="buttons"
                appId="2678136558938821"
                @login="getUserData"
                @get-initial-status="getUserData"
              ></facebook-login>
              <GoogleLogin
                slot="buttons"
                class="buttons"
                :params="params"
                :renderParams="renderParams"
                :onSuccess="onSuccess"
              ></GoogleLogin>
              <br />
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
                <span
                  class="md-error"
                  v-else-if="!$v.password.minlength"
                >Your password should have a minimum of 8 characters</span>
              </md-field>
              <md-progress-bar
                style="width: 100%"
                slot="footer"
                md-mode="indeterminate"
                v-if="sending"
              />
              <md-button
                slot="footer"
                @click="validateUser"
                class="md-simple md-success md-lg"
              >Log In</md-button>
            </login-card>
          </div>
        </div>
      </div>
    </div>
    <div id="notifications">
      <div v-if="successNotif" class="alert alertTop alert-success">
        <div class="container">
          <button
            type="button"
            aria-hidden="true"
            class="close"
            @click="removeNotify('successNotif')"
          >
            <md-icon>clear</md-icon>
          </button>
          <div class="alert-icon">
            <md-icon>check</md-icon>
          </div>

          <b>SUCCESS</b> : Yuhuuu! You're logged In!
        </div>
      </div>
      <div v-if="inactiveNotif" class="alert alertTop alert-info">
        <div class="container">
          <button
            type="button"
            aria-hidden="true"
            class="close"
            @click="removeNotify('inactiveNotif')"
          >
            <md-icon>clear</md-icon>
          </button>
          <div class="alert-icon">
            <md-icon>info_outline</md-icon>
          </div>
          <b>REMINDER</b> : Hey, it looks like you still haven't confirmed your email address yet. Please check your email!
        </div>
      </div>
      <div v-if="wrongUsernameNotif" class="alert alertTop alert-danger">
        <div class="container">
          <button
            type="button"
            aria-hidden="true"
            class="close"
            @click="removeNotify('wrongUsernameNotif')"
          >
            <md-icon>clear</md-icon>
          </button>
          <div class="alert-icon">
            <md-icon>info_outline</md-icon>
          </div>
          <b>ERROR ALERT</b> : Wrong email, please make sure you register or verify that it is written correctly ...
        </div>
      </div>
      <div v-if="wrongPasswordNotif" class="alert alertTop alert-danger">
        <div class="container">
          <button
            type="button"
            aria-hidden="true"
            class="close"
            @click="removeNotify('wrongPasswordNotif')"
          >
            <md-icon>clear</md-icon>
          </button>
          <div class="alert-icon">
            <md-icon>info_outline</md-icon>
          </div>
          <b>ERROR ALERT</b> : Wrong password, please make sure that it is written correctly ...
        </div>
      </div>
      <div v-if="socialButtonNotif" class="alert alertTop alert-danger">
        <div class="container">
          <button
            type="button"
            aria-hidden="true"
            class="close"
            @click="removeNotify('socialButtonNotif')"
          >
            <md-icon>clear</md-icon>
          </button>
          <div class="alert-icon">
            <md-icon>info_outline</md-icon>
          </div>
          <b>ERROR ALERT</b> : Seems like you're registered using social buttons. Try to Log In using Google or Facebook...
        </div>
      </div>
    </div>
    <div id="notifications2">
      <div v-if="successNotif" class="alert alertBottom alert-success">
        <div class="container">
          <button
            type="button"
            aria-hidden="true"
            class="close"
            @click="removeNotify('successNotif')"
          >
            <md-icon>clear</md-icon>
          </button>
          <div class="alert-icon">
            <md-icon>check</md-icon>
          </div>

          <b>SUCCESS ALERT</b> : Yuhuuu! You've got your $11.99 album from The Weeknd
        </div>
      </div>
      <div v-if="inactiveNotif" class="alert alertBottom alert-info">
        <div class="container">
          <button
            type="button"
            aria-hidden="true"
            class="close"
            @click="removeNotify('inactiveNotif')"
          >
            <md-icon>clear</md-icon>
          </button>
          <div class="alert-icon">
            <md-icon>info_outline</md-icon>
          </div>
          <b>REMINDER</b> : Hey, it looks like you still haven't confirmed your email address yet. Please check your email!
        </div>
      </div>
      <div v-if="wrongUsernameNotif" class="alert alertBottom alert-danger">
        <div class="container">
          <button
            type="button"
            aria-hidden="true"
            class="close"
            @click="removeNotify('wrongUsernameNotif')"
          >
            <md-icon>clear</md-icon>
          </button>
          <div class="alert-icon">
            <md-icon>info_outline</md-icon>
          </div>
          <b>ERROR ALERT</b> : Wrong email, please make sure you register or verify that it is written correctly ...
        </div>
      </div>
      <div v-if="wrongPasswordNotif" class="alert alertBottom alert-danger">
        <div class="container">
          <button
            type="button"
            aria-hidden="true"
            class="close"
            @click="removeNotify('wrongPasswordNotif')"
          >
            <md-icon>clear</md-icon>
          </button>
          <div class="alert-icon">
            <md-icon>info_outline</md-icon>
          </div>
          <b>ERROR ALERT</b> : Wrong password, please make sure that it is written correctly ...
        </div>
      </div>
      <div v-if="socialButtonNotif" class="alert alertBottom alert-danger">
        <div class="container">
          <button
            type="button"
            aria-hidden="true"
            class="close"
            @click="removeNotify('socialButtonNotif')"
          >
            <md-icon>clear</md-icon>
          </button>
          <div class="alert-icon">
            <md-icon>info_outline</md-icon>
          </div>
          <b>ERROR ALERT</b> : Seems like you're registered using social buttons. Try to Log In using Google or Facebook...
        </div>
      </div>
    </div>
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
import {
  required,
  email,
  minLength,
  maxLength
} from "vuelidate/lib/validators";
export default {
  components: {
    LoginCard,
    GoogleLogin,
    facebookLogin
  },
  bodyClass: "login-page",
  mixins: [validationMixin],
  data() {
    return {
      socialButtonNotif: false, //Error // FIX THIS
      successNotif: false,
      inactiveNotif: false,
      wrongUsernameNotif: false,
      wrongPasswordNotif: false,
      sending: false,
      email: null,
      password: null,
      params: {
        client_id:
          "533129668624-0iiemq738iusdp6tdq5791thhiks11fq.apps.googleusercontent.com"
      },
      logoutButton: true,
      // only needed if you want to render the button with the google ui
      renderParams: {
        width: 280,
        height: 35,
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
    header: {
      type: String,
      default: require("@/assets/img/profile_city.jpg")
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
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
            localStorage.setItem("x-token", this.token);
            this.successNotif = true;
            window.setTimeout(() => {
              router.push({ name: "index" });
            }, 1500);
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
          localStorage.setItem(
            "x-token",
            googleUser.getAuthResponse().id_token
          );
          this.successNotif = true;
          window.setTimeout(() => {
            router.push({ name: "index" });
          }, 1500);
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
          if (response.data.status === "success") {
            this.UPDATE_LOGIN(true);
            if (response.data.details.active) {
              this.UPDATE_ACTIVATE();
              this.successNotif = true;
              window.setTimeout(() => {
                router.push({ name: "index" });
              }, 1500);
            } else {
              this.inactiveNotif = true;
            }
          } else if (response.data.status === "wrong password") {
            this.wrongPasswordNotif = true;
          } else {
            this.wrongUsernameNotif = true;
          }
        })
        .catch(function(error) {});
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
    },
    removeNotify(notifyClass) {
      this[notifyClass] = false;
    }
  }
};
</script>

<style lang="css">
.md-error {
  transform: translate3d(0, -8px, 0) !important;
}
</style>
