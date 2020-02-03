import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      loggedIn: localStorage.getItem("x-token") ? true : false,
      isActivated: false
    },
    products: [],
    filters: {}
  },
  getters: {
    auth(state) {
      return state.user;
    },
    getProducts(state) {
      return state.products;
    },
    getFilters(state) {
      return state.filters;
    }
  },
  mutations: {
    UPDATE_LOGIN: state => {
      state.user.loggedIn = true;
    },
    UPDATE_ACTIVATE: state => {
      state.user.isActivated = true;
    },
    ADD_PRODUCTS: (state, prods) => {
      state.products = prods;
    }
  }
});
