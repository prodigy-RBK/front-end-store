import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueAnalytics from "vue-analytics";
import MaterialKit from "./plugins/material-kit";
import store from "./store";
import axios from "axios";
Vue.config.productionTip = false;

Vue.use(require("vue-moment"));
Vue.use(MaterialKit);
const NavbarStore = {
  showNavbar: false
};
Vue.use(VueAnalytics, {
  id: "UA-158187092-1"
});
axios.interceptors.request.use(
  request => {
    if (localStorage.getItem("x-token")) {
      request.headers["x-token"] = localStorage.getItem("x-token");
    }
    if (localStorage.getItem("x-refresh-token")) {
      request.headers["x-refresh-token"] = localStorage.getItem("x-refresh-token");
    }
    return request;
  },
  function(error) {
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(
  function(response) {
    if (response.headers["x-token"]) {
      localStorage.setItem("x-token", response.headers["x-token"]);
      localStorage.setItem("x-refresh-token", response.headers["x-refresh-token"]);
    }
    return response;
  },
  function(error) {
    return Promise.reject(error);
  }
);
Vue.mixin({
  data() {
    return {
      NavbarStore
    };
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
