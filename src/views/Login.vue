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
              <md-button slot="buttons" href="#" class="md-just-icon md-simple md-white">
                <i class="fab fa-facebook-square"></i>
              </md-button>
              <md-button slot="buttons" href="#" class="md-just-icon md-simple md-white">
                <i class="fab fa-google-plus-g"></i>
              </md-button>
              <md-button slot="buttons" href="#" class="md-just-icon md-simple md-white">
                <i class="fab fa-twitter"></i>
              </md-button>
              <facebook-login
                class="button"
                slot="buttons"
                appId="2456751817987713"
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
              >
                <i class="fab fa-google-plus-g"></i>
              </GoogleLogin>

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
            </login-card>
          </div>
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

export default {
  components: {
    LoginCard,
    facebookLogin
  },
  bodyClass: "login-page",
  data() {
    return {
      email: null,
      password: null,
      FB: null,
      params: {
        client_id: "xxxxxx"
      },
      // only needed if you want to render the button with the google ui
      renderParams: {
        width: 250,
        height: 50,
        longtitle: true
      }
    };
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
    getUserData() {
      this.FB.api("/me", "GET", { fields: "id,name,email,picture" }, user => {
        console.log(user);
        // this.personalID = user.id;
        // this.email = user.email;
        // this.name = user.name;
        // this.picture = user.picture.data.url;
      });
    },
    sdkLoaded(payload) {
      this.isConnected = payload.isConnected;
      this.FB = payload.FB;
      if (this.isConnected) this.getUserData();
    },
    ...mapGetters(["auth"]),
    ...mapMutations(["UPDATE_LOGIN", "UPDATE_ACTIVATE"]),
    submit: function(e) {
      axios
        .post("http://localhost:3000/api/user/login", {
          email: this.email,
          password: this.password
        })
        .then(response => {
          console.log("====>", response);
          if (response.data.status === "success") {
            localStorage.setItem(
              "x-token",
              response.data.details.token.refreshToken
            );
            localStorage.setItem(
              "x-refresh-token",
              response.data.details.token.token
            );
            //  this.UPDATE_LOGIN();
            if (response.data.details.active) {
              this.UPDATE_ACTIVATE();
              router.push({ name: "index" });
            } else {
              router.push({ name: "confirmation" });
            }
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="css">
#google-signin-btn-4 {
  height: 50px;
  width: 50px;
  color: burlywood;
  background-color: black;
}
</style>
