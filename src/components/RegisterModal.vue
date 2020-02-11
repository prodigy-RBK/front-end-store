<template>
  <login-card header-color="green">
    <h4 slot="title" class="card-title">Register</h4>
    <facebook-login
      slot="buttons"
      class="button"
      appId="2678136558938821"
      @login="getUserData"
      @logout="onLogout"
      @sdk-loaded="sdkLoaded"
      @get-initial-status="getUserData"
    ></facebook-login>
    <GoogleLogin
      slot="buttons"
      class="button"
      :params="params"
      :renderParams="renderParams"
      :onSuccess="onSuccess"
      :onFailure="onFailure"
      style="content: Login with Google !important;"
    ></GoogleLogin>
    <p slot="description" class="description">Or Be Classical</p>
    <md-field class="md-form-group" slot="inputs">
      <md-icon>face</md-icon>
      <label>First Name...</label>
      <md-input v-model="firstname"></md-input>
    </md-field>
    <md-field class="md-form-group" slot="inputs">
      <md-icon>face</md-icon>
      <label>Last Name...</label>
      <md-input v-model="lastName"></md-input>
    </md-field>
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
  </login-card>
</template>
<script>
import GoogleLogin from "vue-google-login";
import { LoginCard } from "@/components";
import facebookLogin from "facebook-login-vuejs";
import router from "../router";
import { mapMutations, mapGetters } from "vuex";
import axios from "axios";

export default {
  name: "register-modal",
  components: {
    GoogleLogin,
    facebookLogin
  },
  data() {
    return {
      firstname: null,
      lastName: null,
      email: null,
      password: null,
      params: {
        client_id:
          "533129668624-0iiemq738iusdp6tdq5791thhiks11fq.apps.googleusercontent.com"
      },
      logoutButton: true,
      // only needed if you want to render the button with the google ui
      renderParams: {
        width: "300%",
        height: 35,
        longtitle: true
      }
    };
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
            localStorage.setItem("x-token", this.token);
            router.push({ name: "index" });
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
          localStorage.setItem(
            "x-token",
            googleUser.getAuthResponse().id_token
          );
          router.push({ name: "index" });
        });
    },
    submit: function(e, next) {
      axios
        .post("https://prodigy-rbk.herokuapp.com/api/user/signUp", {
          firstName: this.registerFirstname,
          lastName: this.registerLastName,
          email: this.registerEmail,
          password: this.registerPassword
        })
        .then(function(response) {
          if (response.data.status === "success") {
            router.push({ name: "confirmation" });
          }
        })
        .catch(function(error) {});
    }
  }
};
</script>
