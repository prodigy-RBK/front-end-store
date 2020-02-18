<template>
  <div class="wrapper">
    <div class="section page-header header-filter" :style="headerStyle">
      <div class="container" style="max-width:1600px;">
        <div class="md-layout">
          <div class="md-layout-item md-size-33 md-small-size-66 md-xsmall-size-100 md-medium-size-40 mx-auto">
            <login-card header-color="green">
              <h4 slot="title" class="card-title" style="position: absolute; top: 19px; left: 35%;">Reset Password</h4>
              <br />
              <md-field class="md-form-group" :class="getValidationClass('email')" slot="inputs">
                <md-icon>email</md-icon>
                <label for="email">Email...</label>
                <md-input name="email" id="email" v-model="email" type="email"></md-input>
                <span class="md-error" v-if="!$v.email.required">Email is required</span>
                <span class="md-error" v-else-if="!$v.email.email">Invalid email</span>
              </md-field>

              <md-progress-bar style="width: 100%" slot="footer" md-mode="indeterminate" v-if="sending" />
              <md-button slot="footer" @click="validateUser" class="md-simple md-success md-lg">Reset Password</md-button>
            </login-card>
          </div>
        </div>
      </div>
    </div>
    <div id="notifications">
      <div v-if="successNotif" class="alert alertTop alert-success">
        <div class="container">
          <button type="button" aria-hidden="true" class="close" @click="removeNotify('successNotif')">
            <md-icon>clear</md-icon>
          </button>
          <div class="alert-icon">
            <md-icon>check</md-icon>
          </div>

          <b>SUCCESS</b> : Check your email
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
      successNotif: false,

      sending: false,
      email: null
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
      default: require("@/assets/img/e-commerce/bg2.jpg")
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
        .post("https://prodigy-rbk.herokuapp.com/api/user/resetPassword", {
          email: this.email
        })
        .then(response => {
          if (response.data.status === "success") {
            this.successNotif = true;
          }
        })
        .catch(function(error) {
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
