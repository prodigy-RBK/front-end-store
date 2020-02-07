import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import createPersistedState from "vuex-persistedstate";
import Cookies from "js-cookie";

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
    },
    cart: [],
    wishlist: []
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
    },
    getCart(state) {
      return state.cart;
    },
    getWishlist(state) {
      return state.wishlist;
    }
  },
  mutations: {
    UPDATE_LOGIN: (state, boo) => {
      state.user.loggedIn = boo;
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
    },
    ADD_TO_CART: (state, product) => {
      state.cart.push(product);
    },
    REMOVE_FROM_CART: (state, index) => {
      state.cart.splice(index, 1);
    },
    DELETE_CART: state => {
      state.cart = [];
    },
    UPDATE_WISHLIST: (state, payload) => {
      state.wishlist = payload;
    }
  },
  actions: {
    UPDATE_DISPLAYED_PRODUCTS: function(state, payload) {
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
    },
    UPDATE_USER_WISHLIST: async function(state) {
      let { data } = await axios.get("http://127.0.0.1:3000/api/user/wishlist");
      this.commit("UPDATE_WISHLIST", data.wishlist);
    },
    ADD_TO_WISHLIST: async function(state, payload) {
      let { data } = await axios.put("http://127.0.0.1:3000/api/user/wishlist", { product: payload });
      this.commit("UPDATE_WISHLIST", data);
    },
    REMOVE_FROM_WISHLIST: async function(state, payload) {
      let { data } = await axios.delete("http://127.0.0.1:3000/api/user/wishlist", {
        data: {
          product: payload
        }
      });
      this.commit("UPDATE_WISHLIST", data);
    }
  },
  plugins: [
    createPersistedState({
      storage: {
        getItem: key => Cookies.get(key),
        setItem: (key, value) => Cookies.set(key, value, { expires: 3, secure: true }),
        removeItem: key => Cookies.remove(key)
      }
    })
  ]
});
