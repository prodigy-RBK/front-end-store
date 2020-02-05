import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      loggedIn: localStorage.getItem("x-token") ? true : false,
      isActivated: false
    },
    products: [],
    displayedProducts: [],
    filters: {
      brands: [],
      categories: [],
      tags: [],
      priceRange: [0, 1000]
    }
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
    },
    getDisplayedProducts(state) {
      return state.displayedProducts;
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
    },
    DISPLAY_PRODUCTS: (state, products) => {
      state.displayedProducts = products;
    },
    UPDATE_FILTERS: (state, payload) => {
      const { filter, values } = payload;
      state.filters[filter] = values;
    }
  },
  actions: {
    UPDATE_DISPLAYED_PRODUCTS: function (state, payload) {
      let { brandsQuery, categoriesQuery, tagsQuery, priceRange, page } = payload;
      if (!brandsQuery.length) brandsQuery = this.state.filters.brands.map(elm => elm._id);
      if (!categoriesQuery.length) categoriesQuery = this.state.filters.categories;
      if (!tagsQuery.length) tagsQuery = this.state.filters.tags;
      page = page || 1;
      axios
        .post("http://127.0.0.1:3000/api/products/search", {
          brands: brandsQuery,
          categories: categoriesQuery,
          tags: tagsQuery,
          priceRange: priceRange,
          page: page
        })
        .then(({ data }) => this.commit("DISPLAY_PRODUCTS", data));
    }
  }
});
