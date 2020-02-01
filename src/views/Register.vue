<template>
  <div class="wrapper">
    <div class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div class="md-layout-item md-size-33 md-small-size-66 md-xsmall-size-100 md-medium-size-40 mx-auto">
            <login-card header-color="green">
              <h4 slot="title" class="card-title">Register</h4>
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
              <md-button v-on:click="submit" slot="footer" class="md-simple md-success md-lg">Get Started</md-button>
            </login-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { LoginCard } from "@/components";
import router from "../router";

import axios from "axios";
export default {
  components: {
    LoginCard
  },
  bodyClass: "login-page",
  data() {
    return {
      firstname: null,
      lastName: null,
      email: null,
      password: null
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
    submit: function(e, next) {
      axios
        .post("http://localhost:3000/api/user/signUp", {
          firstName: this.firstname,
          lastName: this.lastName,
          email: this.email,
          password: this.password
        })
        .then(function(response) {
          console.log(response);
          if (response.data.status === "success") {
            router.push({ name: "confirmation" });
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="css"></style>
