<template>
  <div class="wrapper">
    <div class="section page-header header-filter" :style="headerStyle">
      <div class="container" style="max-width:1600px;">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-33 md-small-size-66 md-xsmall-size-100 md-medium-size-40 mx-auto"
          >
            <login-card header-color="green">
              <h4 slot="title" class="card-title">Reset Password</h4>

              <br />
              <p slot="description" class="description">Or Be Classical</p>
              <md-field class="md-form-group" :class="getValidationClass('email')" slot="inputs">
                <md-icon>email</md-icon>
                <label for="email">Email...</label>
                <md-input name="email" id="email" v-model="email" type="email"></md-input>
                <span class="md-error" v-if="!$v.email.required">Email is required</span>
                <span class="md-error" v-else-if="!$v.email.email">Invalid email</span>
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

          <b>SUCCESS</b> : Check your email
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

          <b>SUCCESS ALERT</b> : Check your email
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
import { LoginCard } from "@/components";

import router from "../router";

import axios from "axios";
import { validationMixin } from "vuelidate";
import { required, email } from "vuelidate/lib/validators";
export default {
  components: {
    LoginCard
  },
  bodyClass: "reset-password",
  mixins: [validationMixin],
  data() {
    return {
      socialButtonNotif: false, //Error // FIX THIS
      successNotif: false,
      inactiveNotif: false,
      wrongUsernameNotif: false,

      sending: false,
      email: null,

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

      //   display: flex;
      // flex-direction: column;
      // align-items: center;
      // height: 100px;
      // padding: 0px 0px;
      // place-content: space-evenly;
    };
  },
  validations: {
    email: {
      required,
      email
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
    submit: function(e) {
      this.sending = false;
      axios
        .post("http://localhost:3000/api/user/resetPassword", {
          email: this.email
        })
        .then(response => {
          if (response.data.status === "success") {
            this.successNotif = true;
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
