<template>
  <div class="wrapper">
    <parallax
      class="page-header header-filter header-small"
      filter-color="rose"
      parallax-active="true"
      :style="{
        'background-image': `url(${require('../assets/img/examples/clark-street-merc.jpg')})`
      }"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-12 ml-auto mr-auto text-center">
            <div class="brand">
              <h1 class="title">Ecommerce Page!</h1>
              <h4>
                Free global delivery for all products. Use coupon
                <b>25summer</b> for an extra 25% Off
              </h4>
            </div>
          </div>
        </div>
      </div>
    </parallax>

    <div class="main main-raised">
      <div class="section">
        <div class="container" style="max-width: 1600px;">
          <!-- Section: Latest Offers -->
          <h2 class="section-title">Recommended for you</h2>
          <div class="row">
            <div class="col-md-4" v-for="product in recommendedproduct.slice(0, 3)" :key="product._id">
              <div class="card card-product card-plain">
                <router-link :to="'/products/' + product._id" exact>
                  <div class="card-header card-header-image">
                    <a href="#pablo">
                      <img :src="product.images[0]" />
                    </a>
                  </div>
                  <div class="card-body text-center">
                    <h4 class="card-title">
                      <a href="#pablo">{{ product.title }}</a>
                    </h4>
                    <!-- <p class="card-description">{{ product.description }}</p> -->
                  </div>
                </router-link>
                <div class="card-footer">
                  <div class="price-container">
                    <span class="price price-new">€ {{ product.price }}</span>
                  </div>
                  <div>
                    <md-button class="md-rose md-just-icon md-simple" @click="addToWishlist" v-show="!updatedInWishlist">
                      <md-icon>favorite_border</md-icon>
                    </md-button>
                    <md-button class="md-rose md-just-icon md-simple" @click="removeFromWishlist" v-show="updatedInWishlist">
                      <md-icon>favorite</md-icon>
                    </md-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- section: Product List -->
      <div class="section">
        <div class="container" style="max-width: 1600px;">
          <h2 class="section-title">Find what you need</h2>
          <div class="row">
            <div class="col-md-3">
              <filter-section></filter-section>
            </div>
            <div class="col-md-9">
              <div class="row">
                <!-- Whoever is doing the front, display multiple of 3 products -->
                <div class="col-md-12">
                  <div class="row">
                    <div class="col-md-4 myClass" v-for="product in pageProducts" :key="product._id">
                      <product-card :product="product" :inWishlist="$store.state.wishlist.includes(product._id)"></product-card>

                      <!-- end card -->
                    </div>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="row">
                    <div class="col-md-3 ml-auto mr-auto">
                      <pagination class="pagination-info myPagination" v-model="infoPagination" with-text :value="1" :page-count="pageCount"></pagination>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <h2 class="section-title">News in fashion</h2>
          <div class="row" style="margin-bottom: 20px;">
            <div class="col-md-4" v-for="article in popularArticles1" :key="article.title">
              <div
                class="card card-background"
                style="height: 100%"
                :style="{
                  'background-image': 'url(' + article.urlToImage + ')'
                }"
              >
                <div class="card-body">
                  <div class="custombody">
                    <h6 class="card-category text-info">{{ article.author }}</h6>
                    <a :href="article.url" target="_blanck">
                      <h3 class="card-title">{{ article.title }}</h3>
                    </a>
                    <p class="card-description">{{ article.description }}</p>
                    <md-button :href="article.url" class="md-white md-round" target="_blank"> <i class="material-icons">subject</i> Read </md-button>
                  </div>
                </div>
              </div>
              <!-- end card -->
            </div>
          </div>
          <div class="row">
            <div class="col-md-6" v-for="article in popularArticles2" :key="article.title">
              <div
                style="height: 100%"
                class="card card-background"
                :style="{
                  'background-image': 'url(' + article.urlToImage + ')'
                }"
              >
                <div class="card-body">
                  <div class="custombody">
                    <h6 class="card-category text-info">{{ article.author }}</h6>
                    <a :href="article.url" target="_blanck">
                      <h3 class="card-title">{{ article.title }}</h3>
                    </a>
                    <p class="card-description">{{ article.description }}</p>
                    <md-button :href="article.url" class="md-white md-round" target="_blanck"> <i class="material-icons">subject</i> Read </md-button>
                  </div>
                </div>
              </div>
              <!-- end card -->
            </div>
          </div>
        </div>
      </div>
      <!-- section -->
    </div>
    <!-- section -->
    <div
      class="subscribe-line subscribe-line-image"
      data-parallax="true"
      :style="{
        'background-image': `url(${require('../assets/img/examples/ecommerce-header.jpg')})`
      }"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-6 ml-auto mr-auto">
            <div class="text-center">
              <h3 class="title">Subscribe to our Newsletter</h3>

              <p class="description">Join our newsletter and get news in your inbox every week! We hate spam too, so no worries about this.</p>
            </div>
            <div class="card card-raised card-form-horizontal">
              <div class="card-body">
                <form method action>
                  <div class="row">
                    <div class="col-sm-8">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text">
                            <i class="material-icons">mail</i>
                          </span>
                        </div>
                        <input type="text" class="form-control" placeholder="Your Email..." />
                      </div>
                    </div>
                    <div class="col-sm-4">
                      <md-button class="md-rose md-block">Subscribe</md-button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { FilterSection } from "@/components";
import { ProductCard } from "../components";
import { mapMutations, mapGetters } from "vuex";
import axios from "axios";

export default {
  name: "shopping-cart",
  bodyClass: "product-page",
  props: {
    image: {
      type: String,
      default: require("@/assets/img/e-commerce/bg1.jpg")
    },
    signup: {
      type: String,
      default: require("@/assets/img/city.jpg")
    },
    landing: {
      type: String,
      default: require("@/assets/img/landing.jpg")
    },
    profile: {
      type: String,
      default: require("@/assets/img/profile.jpg")
    }
  },
  data() {
    return {
      infoPagination: 1,
      firstname: null,
      pageCount: 1,
      products: null,
      pageProducts: null,
      email: null,
      password: null,
      leafShow: false,
      latestArticles: [],
      popularArticles: [],
      popularArticles1: [],
      popularArticles2: [],
      recommendedproduct: [],
      updatedInWishlist: this.inWishlist
    };
  },
  methods: {
    ...mapMutations(["ADD_PRODUCTS", "DISPLAY_PRODUCTS"]),
    ...mapGetters(["auth", "getProducts", "getDisplayedProducts"]),
    leafActive() {
      if (window.innerWidth < 768) {
        this.leafShow = false;
      } else {
        this.leafShow = true;
      }
    },
    changePage(page) {
      let max = page * 9;
      let min = max - 9;
      this.pageProducts = this.getDisplayedProducts().slice(min, max);
    },
    async fetchArticles() {
      let { data } = await axios.get("https://prodigy-rbk.herokuapp.com/api/articles");
      this.latestArticles = data.latestArticles.articles;
      this.popularArticles1 = this.latestArticles.slice(0, 3);
      this.popularArticles2 = this.latestArticles.slice(3, 5);
    },
    async getrecommendedproducts() {
      try {
        let { data } = await axios.get(`https://prodigy-rbk.herokuapp.com/api/user/verifytoken`);
        try {
          let recprods = await axios.get("https://prodigy-rbk.herokuapp.com/api/recommendedproducts/getrecommprods", { params: { userid: data.iduser } });
          if (recprods.data !== "noid") {
            console.log("idexiste");
            function shuffle(array) {
              for (let i = array.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
              }
              return array;
            }
            this.recommendedproduct = shuffle(recprods.data);
          } else {
            console.log("no id");
            let mostviewed = await axios.get("https://prodigy-rbk.herokuapp.com/api/analytics/pageview");
            this.recommendedproduct = mostviewed.data;
          }
        } catch (err) {
          console.log(err);
        }
      } catch (err) {
        console.log("not logged in");
        let mostviewed = await axios.get("https://prodigy-rbk.herokuapp.com/api/analytics/pageview");
        this.recommendedproduct = mostviewed.data;
        console.log(err);
      }
    },
    async addToWishlist() {
      this.$store.dispatch("ADD_TO_WISHLIST", this.product._id);
      this.updatedInWishlist = true;
    },
    async removeFromWishlist() {
      this.$store.dispatch("REMOVE_FROM_WISHLIST", this.product._id);
      this.updatedInWishlist = false;
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.image})`
      };
    },
    signupImage() {
      return {
        backgroundImage: `url(${this.signup})`
      };
    },
    displayedProducts() {
      return this.getDisplayedProducts();
    }
  },
  async beforeMount() {
    this.fetchArticles();
    this.getrecommendedproducts();
  },
  watch: {
    infoPagination: async function() {
      this.changePage(this.infoPagination);
    },
    displayedProducts: function() {
      this.pageProducts = this.getDisplayedProducts().slice(0, 9);
      this.pageCount = Math.ceil(this.getDisplayedProducts().length / 9);
      this.infoPagination = 1;
    }
  }
};
</script>

<style scoped>
@import "../assets/css/buttons.css";
.form-control {
  display: block;
  width: 100%;
  padding: 0.4375rem 0;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: rgba(0, 0, 0, 0);
  background-clip: padding-box;
  border: 1px solid #d2d2d2;
  border-radius: 0;
  box-shadow: none;
  -webkit-transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.form-control::-ms-expand {
  background-color: transparent;
  border: 0;
}
.form-control:focus {
  color: #495057;
  background-color: rgba(0, 0, 0, 0);
  border-color: #9acffa;
  outline: 0;
  box-shadow: none, 0 0 0 0.2rem rgba(33, 150, 243, 0.25);
}
.form-control::-webkit-input-placeholder {
  color: #6c757d;
  opacity: 1;
}
.form-control::-moz-placeholder {
  color: #6c757d;
  opacity: 1;
}
.form-control:-ms-input-placeholder {
  color: #6c757d;
  opacity: 1;
}
.form-control::-ms-input-placeholder {
  color: #6c757d;
  opacity: 1;
}
.form-control::placeholder {
  color: #6c757d;
  opacity: 1;
}
.form-control:disabled,
.form-control[readonly] {
  background-color: #e9ecef;
  opacity: 1;
}

.form-check {
  position: relative;
  display: block;
  padding-left: 1.25rem;
}

.form-check-input {
  position: absolute;
  margin-top: 0.3rem;
  margin-left: -1.25rem;
}
.form-check-input:disabled ~ .form-check-label {
  color: #6c757d;
}

.form-check-label {
  margin-bottom: 0;
}

.collapse {
  display: none;
}
.collapse.show {
  display: block;
}

.input-group {
  position: relative;
  display: -webkit-box;
  display: flex;
  flex-wrap: wrap;
  -webkit-box-align: stretch;
  align-items: stretch;
  width: 100%;
}
.input-group > .form-control,
.input-group > .custom-select,
.input-group > .custom-file {
  position: relative;
  -webkit-box-flex: 1;
  flex: 1 1 auto;
  width: 1%;
  margin-bottom: 0;
}
.input-group > .form-control:focus,
.input-group > .custom-select:focus,
.input-group > .custom-file:focus {
  z-index: 3;
}
.input-group > .form-control + .form-control,
.input-group > .form-control + .custom-select,
.input-group > .form-control + .custom-file,
.input-group > .custom-select + .form-control,
.input-group > .custom-select + .custom-select,
.input-group > .custom-select + .custom-file,
.input-group > .custom-file + .form-control,
.input-group > .custom-file + .custom-select,
.input-group > .custom-file + .custom-file {
  margin-left: -1px;
}
.input-group > .form-control:not(:last-child),
.input-group > .custom-select:not(:last-child) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.input-group > .form-control:not(:first-child),
.input-group > .custom-select:not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.input-group > .custom-file {
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
}
.input-group > .custom-file:not(:last-child) .custom-file-label,
.input-group > .custom-file:not(:last-child) .custom-file-label::before {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.input-group > .custom-file:not(:first-child) .custom-file-label,
.input-group > .custom-file:not(:first-child) .custom-file-label::before {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.input-group-prepend,
.input-group-append {
  display: -webkit-box;
  display: flex;
}

.input-group-prepend {
  margin-right: -1px;
}

.input-group-append {
  margin-left: -1px;
}

.input-group-text {
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding: 0.4375rem 0;
  margin-bottom: 0;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  text-align: center;
  white-space: nowrap;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 0;
}
.input-group-text input[type="radio"],
.input-group-text input[type="checkbox"] {
  margin-top: 0;
}

.card {
  position: relative;
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 0.25rem;
}
.card > hr {
  margin-right: 0;
  margin-left: 0;
}
.card > .list-group:first-child .list-group-item:first-child {
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}
.card > .list-group:last-child .list-group-item:last-child {
  border-bottom-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}

.card-body {
  -webkit-box-flex: 1;
  flex: 1 1 auto;
  padding: 1.25rem;
}

.card-title {
  margin-bottom: 0.75rem;
}

.card-subtitle {
  margin-top: -0.375rem;
  margin-bottom: 0;
}

.card-text:last-child {
  margin-bottom: 0;
}

.card-link:hover {
  text-decoration: none;
}

.card-link + .card-link {
  margin-left: 1.25rem;
}

.card-header {
  padding: 0.75rem 1.25rem;
  margin-bottom: 0;
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}
.card-header:first-child {
  border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;
}
.card-header + .list-group .list-group-item:first-child {
  border-top: 0;
}

.card-footer {
  padding: 0.75rem 1.25rem;
  background-color: #fff;
  border-top: 1px solid rgba(0, 0, 0, 0.12);
}
.card-footer:last-child {
  border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px);
}

.card-header-tabs {
  margin-right: -0.625rem;
  margin-bottom: -0.75rem;
  margin-left: -0.625rem;
  border-bottom: 0;
}

.card-header-pills {
  margin-right: -0.625rem;
  margin-left: -0.625rem;
}

.card-img-overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1.25rem;
}

.card-img {
  width: 100%;
  border-radius: calc(0.25rem - 1px);
}

.card-img-top {
  width: 100%;
  border-top-left-radius: calc(0.25rem - 1px);
  border-top-right-radius: calc(0.25rem - 1px);
}

.card-img-bottom {
  width: 100%;
  border-bottom-right-radius: calc(0.25rem - 1px);
  border-bottom-left-radius: calc(0.25rem - 1px);
}

.card-deck {
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
}
.card-deck .card {
  margin-bottom: 15px;
}
@media (min-width: 576px) {
  .card-deck {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-flow: row wrap;
    margin-right: -15px;
    margin-left: -15px;
  }
  .card-deck .card {
    display: -webkit-box;
    display: flex;
    -webkit-box-flex: 1;
    flex: 1 0 0%;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    margin-right: 15px;
    margin-bottom: 0;
    margin-left: 15px;
  }
}

.card-group {
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
}
.card-group > .card {
  margin-bottom: 15px;
}
@media (min-width: 576px) {
  .card-group {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-flow: row wrap;
  }
  .card-group > .card {
    -webkit-box-flex: 1;
    flex: 1 0 0%;
    margin-bottom: 0;
  }
  .card-group > .card + .card {
    margin-left: 0;
    border-left: 0;
  }
  .card-group > .card:first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .card-group > .card:first-child .card-img-top,
  .card-group > .card:first-child .card-header {
    border-top-right-radius: 0;
  }
  .card-group > .card:first-child .card-img-bottom,
  .card-group > .card:first-child .card-footer {
    border-bottom-right-radius: 0;
  }
  .card-group > .card:last-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  .card-group > .card:last-child .card-img-top,
  .card-group > .card:last-child .card-header {
    border-top-left-radius: 0;
  }
  .card-group > .card:last-child .card-img-bottom,
  .card-group > .card:last-child .card-footer {
    border-bottom-left-radius: 0;
  }
  .card-group > .card:only-child {
    border-radius: 0.25rem;
  }
  .card-group > .card:only-child .card-img-top,
  .card-group > .card:only-child .card-header {
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }
  .card-group > .card:only-child .card-img-bottom,
  .card-group > .card:only-child .card-footer {
    border-bottom-right-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }
  .card-group > .card:not(:first-child):not(:last-child):not(:only-child) {
    border-radius: 0;
  }
  .card-group > .card:not(:first-child):not(:last-child):not(:only-child) .card-img-top,
  .card-group > .card:not(:first-child):not(:last-child):not(:only-child) .card-img-bottom,
  .card-group > .card:not(:first-child):not(:last-child):not(:only-child) .card-header,
  .card-group > .card:not(:first-child):not(:last-child):not(:only-child) .card-footer {
    border-radius: 0;
  }
}

.clearfix::after {
  display: block;
  clear: both;
  content: "";
}

.mb-0,
.my-0 {
  margin-bottom: 0 !important;
}

.mr-auto,
.mx-auto {
  margin-right: auto !important;
}

.mb-auto,
.my-auto {
  margin-bottom: auto !important;
}

.ml-auto,
.mx-auto {
  margin-left: auto !important;
}

.text-center {
  text-align: center !important;
}

.text-info {
  color: #00bcd4 !important;
}

body {
  background-color: #eee;
  color: #3c4858;
  font-weight: 300;
}

legend {
  border-bottom: 0;
}

.serif-font {
  font-family: "Roboto Slab", "Times New Roman", serif;
}

* {
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color: transparent;
}
*:focus {
  outline: 0;
}

a {
  color: #9c27b0;
}
a:hover,
a:focus {
  color: #89229b;
  text-decoration: none;
}
a.text-info:hover,
a.text-info:focus {
  color: #00a5bb;
}
a .material-icons {
  vertical-align: middle;
}

.main {
  background: #ffffff;
  position: relative;
  z-index: 3;
}

.form-check,
label {
  font-size: 14px;
  line-height: 1.42857;
  color: #aaaaaa;
  font-weight: 400;
}

.animation-transition-fast,
.bootstrap-datetimepicker-widget table td > div,
.bootstrap-datetimepicker-widget table th > div,
.bootstrap-datetimepicker-widget table th,
.bootstrap-datetimepicker-widget table td span,
.presentation-page .section-cards .card,
.index-page .section-cards .card,
.product-page .flexi-nav > li a,
.navbar,
.bootstrap-tagsinput .tag,
.bootstrap-tagsinput [data-role="remove"],
.card-collapse .card-header a i {
  -webkit-transition: all 150ms ease 0s;
  transition: all 150ms ease 0s;
}

.title {
  margin-top: 30px;
  margin-bottom: 25px;
  min-height: 32px;
}

.form-check {
  margin-bottom: 0.5rem;
  padding-left: 0;
}
.form-check .form-check-label {
  cursor: pointer;
  padding-left: 0;
}
.form-group.is-focused .form-check .form-check-label {
  color: rgba(0, 0, 0, 0.26);
}
.form-group.is-focused .form-check .form-check-label:hover,
.form-group.is-focused .form-check .form-check-label:focus {
  color: rgba(0, 0, 0, 0.54);
}
fieldset[disabled] .form-group.is-focused .form-check .form-check-label {
  color: rgba(0, 0, 0, 0.26);
}
.form-check .form-check-input {
  opacity: 0;
  position: absolute;
  margin: 0;
  z-index: -1;
  width: 0;
  height: 0;
  overflow: hidden;
  left: 0;
  pointer-events: none;
}
.form-check .form-check-sign {
  vertical-align: middle;
  position: relative;
  top: -2px;
  float: left;
  padding-right: 10px;
  display: inline-block;
}
.form-check .form-check-sign:before {
  display: block;
  position: absolute;
  left: 0;
  content: "";
  background-color: rgba(0, 0, 0, 0.84);
  height: 20px;
  width: 20px;
  border-radius: 100%;
  z-index: 1;
  opacity: 0;
  margin: 0;
  top: 0;
  -webkit-transform: scale3d(2.3, 2.3, 1);
  transform: scale3d(2.3, 2.3, 1);
}
.form-check .form-check-sign .check {
  position: relative;
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 1px solid rgba(0, 0, 0, 0.54);
  overflow: hidden;
  z-index: 1;
  border-radius: 3px;
}
.form-check .form-check-sign .check:before {
  position: absolute;
  content: "";
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  display: block;
  margin-top: -3px;
  margin-left: 7px;
  width: 0;
  color: #fff;
  height: 0;
  box-shadow: 0 0 0 0, 0 0 0 0, 0 0 0 0, 0 0 0 0, 0 0 0 0, 0 0 0 0, 0 0 0 0 inset;
  -webkit-animation: checkbox-off 0.3s forwards;
  animation: checkbox-off 0.3s forwards;
}
.form-check .form-check-input:focus + .form-check-sign .check:after {
  opacity: 0.2;
}
.form-check .form-check-input:checked ~ .form-check-sign .check {
  background: #9c27b0;
}
.form-check .form-check-input:checked ~ .form-check-sign .check:before {
  color: #ffffff;
  box-shadow: 0 0 0 10px, 10px -10px 0 10px, 32px 0 0 20px, 0px 32px 0 20px, -5px 5px 0 10px, 20px -12px 0 11px;
  -webkit-animation: checkbox-on 0.3s forwards;
  animation: checkbox-on 0.3s forwards;
}
.form-check .form-check-input:checked ~ .form-check-sign:before {
  -webkit-animation: rippleOn 500ms;
  animation: rippleOn 500ms;
}
.form-check .form-check-input:checked ~ .form-check-sign .check:after {
  -webkit-animation: rippleOn 500ms forwards;
  animation: rippleOn 500ms forwards;
}
.form-check .form-check-input:not(:checked) + .form-check-sign:before {
  -webkit-animation: rippleOff 500ms;
  animation: rippleOff 500ms;
}
.form-check .form-check-input:not(:checked) + .form-check-sign .check:after {
  -webkit-animation: rippleOff 500ms;
  animation: rippleOff 500ms;
}
fieldset[disabled] .form-check,
fieldset[disabled] .form-check .form-check-input,
.form-check .form-check-input[disabled] ~ .form-check-sign .check,
.form-check .form-check-input[disabled] + .circle {
  opacity: 0.5;
}
.form-check .form-check-input[disabled] ~ .form-check-sign .check {
  border-color: #000000;
  opacity: 0.26;
}
.form-check .form-check-input[disabled] + .form-check-sign .check:after {
  background-color: rgba(0, 0, 0, 0.87);
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
.form-check .form-check-input[disabled][checked] + .form-check-sign .check {
  background-color: #000000;
}

.form-check .form-check-label {
  cursor: pointer;
  padding-left: 25px;
  position: relative;
}
.form-group.is-focused .form-check .form-check-label {
  color: rgba(0, 0, 0, 0.26);
}
.form-group.is-focused .form-check .form-check-label:hover,
.form-group.is-focused .form-check .form-check-label:focus {
  color: rgba(0, 0, 0, 0.54);
}
fieldset[disabled] .form-group.is-focused .form-check .form-check-label {
  color: rgba(0, 0, 0, 0.26);
}
.form-check .form-check-label span {
  display: block;
  position: absolute;
  left: -1px;
  top: -1px;
  -webkit-transition-duration: 0.2s;
  transition-duration: 0.2s;
}
.form-check .form-check-label .circle {
  border: 1px solid rgba(0, 0, 0, 0.54);
  height: 15px;
  width: 15px;
  border-radius: 100%;
  top: 1px;
}
.form-check .form-check-label .circle .check {
  height: 15px;
  width: 15px;
  border-radius: 100%;
  background-color: #9c27b0;
  -webkit-transform: scale3d(0, 0, 0);
  transform: scale3d(0, 0, 0);
}

.form-check .form-check-input {
  opacity: 0;
  height: 0;
  width: 0;
  overflow: hidden;
}
.form-check .form-check-input:checked ~ .check,
.form-check .form-check-input:checked ~ .circle {
  opacity: 1;
}
.form-check .form-check-input:checked ~ .check {
  background-color: #9c27b0;
}
.form-check .form-check-input:checked ~ .circle {
  border-color: #9c27b0;
}
.form-check .form-check-input:checked .check:before {
  -webkit-animation: checkboxOn 0.5s forwards;
  animation: checkboxOn 0.5s forwards;
}
.form-check .form-check-input:checked ~ .circle .check {
  -webkit-transform: scale3d(0.65, 0.65, 1);
  transform: scale3d(0.65, 0.65, 1);
}

.form-check .form-check-input[disabled] ~ .check,
.form-check .form-check-input[disabled] ~ .circle {
  opacity: 0.26;
}

.form-check .form-check-input[disabled] ~ .check {
  background-color: #000000;
}

.form-check .form-check-input[disabled] ~ .circle {
  border-color: #000000;
}

.form-check .form-check-input[disabled] + .circle .check {
  background-color: #000000;
}

.form-check .form-check-sign {
  vertical-align: middle;
  position: relative;
  top: -2px;
  float: left;
  padding-right: 10px;
  display: inline-block;
}

.form-check + .form-check {
  margin-top: 0;
}

form {
  margin-bottom: 1.125rem;
}
.card form {
  margin: 0;
}
.navbar form {
  margin-bottom: 0;
}
.navbar form .bmd-form-group {
  display: inline-block;
  padding-top: 0;
}

.form-control {
  background: no-repeat center bottom, center calc(100% - 1px);
  background-size: 0 100%, 100% 100%;
  border: 0;
  height: 36px;
  -webkit-transition: background 0s ease-out;
  transition: background 0s ease-out;
  padding-left: 0;
  padding-right: 0;
  border-radius: 0;
  font-size: 14px;
}
.form-control:focus,
.bmd-form-group.is-focused .form-control {
  background-size: 100% 100%, 100% 100%;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  box-shadow: none;
}
.form-control::-moz-placeholder {
  color: #aaaaaa;
  font-weight: 400;
  font-size: 14px;
}
.form-control:-ms-input-placeholder {
  color: #aaaaaa;
  font-weight: 400;
  font-size: 14px;
}
.form-control::-webkit-input-placeholder {
  color: #aaaaaa;
  font-weight: 400;
  font-size: 14px;
}
.has-white .form-control::-moz-placeholder {
  color: #fff;
}
.has-white .form-control:-ms-input-placeholder {
  color: #fff;
}
.has-white .form-control::-webkit-input-placeholder {
  color: #fff;
}

.form-control,
.is-focused .form-control {
  background-image: linear-gradient(to top, #9c27b0 2px, rgba(156, 39, 176, 0) 2px), linear-gradient(to top, #d2d2d2 1px, rgba(210, 210, 210, 0) 1px);
}

.bmd-form-group {
  position: relative;
  padding-top: 27px;
}
.bmd-form-group:not(.has-success):not(.has-danger) [class^="bmd-label"].bmd-label-floating,
.bmd-form-group:not(.has-success):not(.has-danger) [class*=" bmd-label"].bmd-label-floating {
  color: #aaaaaa;
}
.bmd-form-group [class^="bmd-label"],
.bmd-form-group [class*=" bmd-label"] {
  position: absolute;
  pointer-events: none;
  -webkit-transition: 0.3s ease all;
  transition: 0.3s ease all;
}
.bmd-form-group [class^="bmd-label"].bmd-label-floating,
.bmd-form-group [class*=" bmd-label"].bmd-label-floating {
  will-change: left, top, contents;
  margin: 0;
  line-height: 1.4;
  font-weight: 400;
}
.bmd-form-group.is-filled .bmd-label-placeholder {
  display: none;
}
.bmd-form-group.bmd-collapse-inline {
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding: 0;
  min-height: 2.1em;
}
.bmd-form-group.bmd-collapse-inline .collapse {
  -webkit-box-flex: 1;
  flex: 1;
  display: none;
}
.bmd-form-group.bmd-collapse-inline .collapse.show {
  max-width: 1200px;
}
.bmd-form-group.bmd-collapse-inline .collapsing,
.bmd-form-group.bmd-collapse-inline .width:not(.collapse),
.bmd-form-group.bmd-collapse-inline .collapse.show {
  display: block;
}
.bmd-form-group.bmd-collapse-inline .collapsing {
  -webkit-transition-duration: 0.2s;
  transition-duration: 0.2s;
  -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
.bmd-form-group input::-webkit-input-placeholder {
  line-height: 1.1;
}
.bmd-form-group input::-moz-placeholder {
  line-height: 1.1;
}
.bmd-form-group input:-ms-input-placeholder {
  line-height: 1.1;
}
.bmd-form-group input::-ms-input-placeholder {
  line-height: 1.1;
}
.bmd-form-group .form-control,
.bmd-form-group label,
.bmd-form-group input::placeholder {
  line-height: 1.1;
}
.bmd-form-group label {
  color: #aaaaaa;
}
.bmd-form-group .radio label,
.bmd-form-group label.radio-inline,
.bmd-form-group .checkbox label,
.bmd-form-group label.checkbox-inline,
.bmd-form-group .switch label {
  line-height: 1.5;
}
.bmd-form-group .checkbox label,
.bmd-form-group .radio label,
.bmd-form-group label {
  font-size: 0.875rem;
}
.bmd-form-group .bmd-label-floating,
.bmd-form-group .bmd-label-placeholder {
  top: 2.3125rem;
}
.bmd-form-group .is-focused .bmd-label-floating,
.bmd-form-group .is-filled .bmd-label-floating {
  top: 1rem;
  left: 0;
  font-size: 0.6875rem;
}
.bmd-form-group .bmd-label-static {
  top: 0.35rem;
  left: 0;
  font-size: 0.875rem;
}
.bmd-form-group .bmd-help {
  margin-top: 0;
  font-size: 0.75rem;
}
.bmd-form-group .form-control.form-control-success,
.bmd-form-group .form-control.form-control-warning,
.bmd-form-group .form-control.form-control-danger {
  background-size: 0 100%, 100% 100%, 0.9375rem 0.9375rem;
}
.bmd-form-group .form-control.form-control-success,
.bmd-form-group .form-control.form-control-success:focus,
.bmd-form-group.is-focused .bmd-form-group .form-control.form-control-success,
.bmd-form-group .form-control.form-control-warning,
.bmd-form-group .form-control.form-control-warning:focus,
.bmd-form-group.is-focused .bmd-form-group .form-control.form-control-warning,
.bmd-form-group .form-control.form-control-danger,
.bmd-form-group .form-control.form-control-danger:focus,
.bmd-form-group.is-focused .bmd-form-group .form-control.form-control-danger {
  padding-right: 0;
  background-repeat: no-repeat, no-repeat;
  background-position: center bottom, center calc(100% - 1px), center right 0.46875rem;
}
.bmd-form-group .form-control.form-control-success:focus,
.bmd-form-group.is-focused .bmd-form-group .form-control.form-control-success,
.bmd-form-group .form-control.form-control-warning:focus,
.bmd-form-group.is-focused .bmd-form-group .form-control.form-control-warning,
.bmd-form-group .form-control.form-control-danger:focus,
.bmd-form-group.is-focused .bmd-form-group .form-control.form-control-danger {
  background-size: 100% 100%, 100% 100%, 0.9375rem 0.9375rem;
}
.bmd-form-group.bmd-form-group-sm input::-webkit-input-placeholder {
  line-height: 1.1;
}
.bmd-form-group.bmd-form-group-sm input::-moz-placeholder {
  line-height: 1.1;
}
.bmd-form-group.bmd-form-group-sm input:-ms-input-placeholder {
  line-height: 1.1;
}
.bmd-form-group.bmd-form-group-sm input::-ms-input-placeholder {
  line-height: 1.1;
}
.bmd-form-group.bmd-form-group-sm .form-control,
.bmd-form-group.bmd-form-group-sm label,
.bmd-form-group.bmd-form-group-sm input::placeholder {
  line-height: 1.1;
}
.bmd-form-group.bmd-form-group-sm label {
  color: #aaaaaa;
}
.bmd-form-group.bmd-form-group-sm .radio label,
.bmd-form-group.bmd-form-group-sm label.radio-inline,
.bmd-form-group.bmd-form-group-sm .checkbox label,
.bmd-form-group.bmd-form-group-sm label.checkbox-inline,
.bmd-form-group.bmd-form-group-sm .switch label {
  line-height: 1.5;
}
.bmd-form-group.bmd-form-group-sm .checkbox label,
.bmd-form-group.bmd-form-group-sm .radio label,
.bmd-form-group.bmd-form-group-sm label {
  font-size: 0.875rem;
}
.bmd-form-group.bmd-form-group-sm .bmd-label-floating,
.bmd-form-group.bmd-form-group-sm .bmd-label-placeholder {
  top: 1.875rem;
}
.bmd-form-group.bmd-form-group-sm .is-focused .bmd-label-floating,
.bmd-form-group.bmd-form-group-sm .is-filled .bmd-label-floating {
  top: 0.75rem;
  left: 0;
  font-size: 0.6875rem;
}
.bmd-form-group.bmd-form-group-sm .bmd-label-static {
  top: 0.1rem;
  left: 0;
  font-size: 0.875rem;
}
.bmd-form-group.bmd-form-group-sm .bmd-help {
  margin-top: 0;
  font-size: 0.65625rem;
}
.bmd-form-group.bmd-form-group-sm .form-control.form-control-success,
.bmd-form-group.bmd-form-group-sm .form-control.form-control-warning,
.bmd-form-group.bmd-form-group-sm .form-control.form-control-danger {
  background-size: 0 100%, 100% 100%, 0.6875rem 0.6875rem;
}
.bmd-form-group.bmd-form-group-sm .form-control.form-control-success,
.bmd-form-group.bmd-form-group-sm .form-control.form-control-success:focus,
.bmd-form-group.is-focused .bmd-form-group.bmd-form-group-sm .form-control.form-control-success,
.bmd-form-group.bmd-form-group-sm .form-control.form-control-warning,
.bmd-form-group.bmd-form-group-sm .form-control.form-control-warning:focus,
.bmd-form-group.is-focused .bmd-form-group.bmd-form-group-sm .form-control.form-control-warning,
.bmd-form-group.bmd-form-group-sm .form-control.form-control-danger,
.bmd-form-group.bmd-form-group-sm .form-control.form-control-danger:focus,
.bmd-form-group.is-focused .bmd-form-group.bmd-form-group-sm .form-control.form-control-danger {
  padding-right: 0;
  background-repeat: no-repeat, no-repeat;
  background-position: center bottom, center calc(100% - 1px), center right 0.34375rem;
}
.bmd-form-group.bmd-form-group-sm .form-control.form-control-success:focus,
.bmd-form-group.is-focused .bmd-form-group.bmd-form-group-sm .form-control.form-control-success,
.bmd-form-group.bmd-form-group-sm .form-control.form-control-warning:focus,
.bmd-form-group.is-focused .bmd-form-group.bmd-form-group-sm .form-control.form-control-warning,
.bmd-form-group.bmd-form-group-sm .form-control.form-control-danger:focus,
.bmd-form-group.is-focused .bmd-form-group.bmd-form-group-sm .form-control.form-control-danger {
  background-size: 100% 100%, 100% 100%, 0.6875rem 0.6875rem;
}
.bmd-form-group.bmd-form-group-lg input::-webkit-input-placeholder {
  line-height: 1.1;
}
.bmd-form-group.bmd-form-group-lg input::-moz-placeholder {
  line-height: 1.1;
}
.bmd-form-group.bmd-form-group-lg input:-ms-input-placeholder {
  line-height: 1.1;
}
.bmd-form-group.bmd-form-group-lg input::-ms-input-placeholder {
  line-height: 1.1;
}
.bmd-form-group.bmd-form-group-lg .form-control,
.bmd-form-group.bmd-form-group-lg label,
.bmd-form-group.bmd-form-group-lg input::placeholder {
  line-height: 1.1;
}
.bmd-form-group.bmd-form-group-lg label {
  color: #aaaaaa;
}
.bmd-form-group.bmd-form-group-lg .radio label,
.bmd-form-group.bmd-form-group-lg label.radio-inline,
.bmd-form-group.bmd-form-group-lg .checkbox label,
.bmd-form-group.bmd-form-group-lg label.checkbox-inline,
.bmd-form-group.bmd-form-group-lg .switch label {
  line-height: 1.5;
}
.bmd-form-group.bmd-form-group-lg .checkbox label,
.bmd-form-group.bmd-form-group-lg .radio label,
.bmd-form-group.bmd-form-group-lg label {
  font-size: 0.875rem;
}
.bmd-form-group.bmd-form-group-lg .bmd-label-floating,
.bmd-form-group.bmd-form-group-lg .bmd-label-placeholder {
  top: 2.4375rem;
}
.bmd-form-group.bmd-form-group-lg .is-focused .bmd-label-floating,
.bmd-form-group.bmd-form-group-lg .is-filled .bmd-label-floating {
  top: 1rem;
  left: 0;
  font-size: 0.6875rem;
}
.bmd-form-group.bmd-form-group-lg .bmd-label-static {
  top: 0.35rem;
  left: 0;
  font-size: 0.875rem;
}
.bmd-form-group.bmd-form-group-lg .bmd-help {
  margin-top: 0;
  font-size: 0.9375rem;
}
.bmd-form-group.bmd-form-group-lg .form-control.form-control-success,
.bmd-form-group.bmd-form-group-lg .form-control.form-control-warning,
.bmd-form-group.bmd-form-group-lg .form-control.form-control-danger {
  background-size: 0 100%, 100% 100%, 1.1875rem 1.1875rem;
}
.bmd-form-group.bmd-form-group-lg .form-control.form-control-success,
.bmd-form-group.bmd-form-group-lg .form-control.form-control-success:focus,
.bmd-form-group.is-focused .bmd-form-group.bmd-form-group-lg .form-control.form-control-success,
.bmd-form-group.bmd-form-group-lg .form-control.form-control-warning,
.bmd-form-group.bmd-form-group-lg .form-control.form-control-warning:focus,
.bmd-form-group.is-focused .bmd-form-group.bmd-form-group-lg .form-control.form-control-warning,
.bmd-form-group.bmd-form-group-lg .form-control.form-control-danger,
.bmd-form-group.bmd-form-group-lg .form-control.form-control-danger:focus,
.bmd-form-group.is-focused .bmd-form-group.bmd-form-group-lg .form-control.form-control-danger {
  padding-right: 0;
  background-repeat: no-repeat, no-repeat;
  background-position: center bottom, center calc(100% - 1px), center right 0.59375rem;
}
.bmd-form-group.bmd-form-group-lg .form-control.form-control-success:focus,
.bmd-form-group.is-focused .bmd-form-group.bmd-form-group-lg .form-control.form-control-success,
.bmd-form-group.bmd-form-group-lg .form-control.form-control-warning:focus,
.bmd-form-group.is-focused .bmd-form-group.bmd-form-group-lg .form-control.form-control-warning,
.bmd-form-group.bmd-form-group-lg .form-control.form-control-danger:focus,
.bmd-form-group.is-focused .bmd-form-group.bmd-form-group-lg .form-control.form-control-danger {
  background-size: 100% 100%, 100% 100%, 1.1875rem 1.1875rem;
}

input::-webkit-input-placeholder {
  line-height: 1.1;
}

input::-moz-placeholder {
  line-height: 1.1;
}

input:-ms-input-placeholder {
  line-height: 1.1;
}

input::-ms-input-placeholder {
  line-height: 1.1;
}

.form-control,
label,
input::placeholder {
  line-height: 1.1;
}

label {
  color: #aaaaaa;
}

.checkbox label,
.radio label,
label {
  font-size: 0.875rem;
}

.input-group .input-group-text {
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  padding: 0 15px 0 15px;
  background-color: transparent;
  border-color: transparent;
}

.page-header {
  height: 100vh;
  background-position: center center;
  background-size: cover;
  margin: 0;
  padding: 0;
  border: 0;
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
}
.page-header .page-header-image {
  position: absolute;
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 100%;
  z-index: -1;
}
.page-header .content-center {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
  color: #ffffff;
  padding: 0 15px;
  width: 100%;
  max-width: 880px;
}
.page-header .carousel .carousel-indicators {
  bottom: 60px;
}
.page-header > .container {
  color: #fff;
}
.page-header .title {
  color: #fff;
}
.page-header.header-small {
  height: 65vh;
  min-height: 65vh;
}
.page-header .iframe-container iframe {
  width: 100%;
  box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
}

.header-filter {
  position: relative;
}
.header-filter:before,
.header-filter:after {
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: block;
  left: 0;
  top: 0;
  content: "";
}
.header-filter::before {
  background: rgba(0, 0, 0, 0.5);
}
.header-filter .container {
  z-index: 2;
  position: relative;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
.h1,
.h2,
.h3,
.h4 {
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 300;
  line-height: 1.5em;
}

h1,
h2,
h3,
.h1,
.h2,
.h3 {
  margin-top: 20px;
  margin-bottom: 10px;
}

h4,
h5,
h6,
.h4,
.h5,
.h6 {
  margin-top: 10px;
  margin-bottom: 10px;
}

html * {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1,
.h1 {
  font-size: 3.3125rem;
  line-height: 1.15em;
}

h2,
.h2 {
  font-size: 2.25rem;
  line-height: 1.5em;
}

h3,
.h3 {
  font-size: 1.5625rem;
  line-height: 1.4em;
}

h4,
.h4 {
  font-size: 1.125rem;
  line-height: 1.5em;
}

h5,
.h5 {
  font-size: 1.0625rem;
  line-height: 1.55em;
  margin-bottom: 15px;
}

h6,
.h6 {
  font-size: 0.75rem;
  text-transform: uppercase;
  font-weight: 500;
}

p {
  font-size: 14px;
  margin: 0 0 10px;
}

b {
  font-weight: 700;
}

.title,
.card-title,
.info-title,
.footer-brand,
.footer-big h5,
.footer-big h4,
.media .media-heading {
  font-weight: 700;
  font-family: "Roboto Slab", "Times New Roman", serif;
}
.title,
.title a,
.card-title,
.card-title a,
.info-title,
.info-title a,
.footer-brand,
.footer-brand a,
.footer-big h5,
.footer-big h5 a,
.footer-big h4,
.footer-big h4 a,
.media .media-heading,
.media .media-heading a {
  color: #3c4858;
  text-decoration: none;
}

.description,
.card-description,
.footer-big p {
  color: #999;
}

.text-info {
  color: #00bcd4 !important;
}

.text-rose {
  color: #e91e63 !important;
}

.section {
  padding: 70px 0;
}

.section,
.section-image {
  background-position: center center;
  background-size: cover;
}

.card {
  border: 0;
  margin-bottom: 30px;
  margin-top: 30px;
  border-radius: 6px;
  color: rgba(0, 0, 0, 0.87);
  background: #fff;
  width: 100%;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
}
.card .card-category:not([class*="text-"]) {
  color: #999999;
}
.card .card-category {
  margin-top: 10px;
}
.card .card-category .material-icons {
  position: relative;
  top: 8px;
  line-height: 0;
}
.card .form-check {
  margin-top: 15px;
}
.card .card-title {
  margin-top: 0.625rem;
}
.card .card-title:last-child {
  margin-bottom: 0;
}
.card.no-shadow .card-header-image,
.card.no-shadow .card-header-image img {
  box-shadow: none !important;
}
.card .card-body,
.card .card-footer {
  padding: 0.9375rem 1.875rem;
}
.card .card-body + .card-footer {
  padding-top: 0rem;
  border: 0;
  border-radius: 6px;
}
.card .card-footer {
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  background-color: transparent;
  border: 0;
}
.card .card-footer .author,
.card .card-footer .stats {
  display: -webkit-inline-box;
  display: inline-flex;
}
.card .card-footer .stats {
  color: #999999;
}
.card .card-footer .stats .material-icons {
  position: relative;
  top: 3px;
  margin-right: 3px;
  margin-left: 3px;
  font-size: 18px;
}
.card.bmd-card-raised {
  box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
}
@media (min-width: 992px) {
  .card.bmd-card-flat {
    box-shadow: none;
  }
}
.card .card-header {
  border-radius: 3px;
  padding: 1rem 15px;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: -30px;
  border: 0;
  background: linear-gradient(60deg, #eee, #bdbdbd);
}
.card .card-header .title {
  color: #fff;
}
.card .card-header:not([class*="header-"]) {
  box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
}
.card .card-header .nav-tabs {
  padding: 0;
}
.card .card-header.card-header-image {
  position: relative;
  padding: 0;
  z-index: 1;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: -30px;
  border-radius: 6px;
}
.card .card-header.card-header-image a {
  display: block;
}
.card .card-header.card-header-image img {
  width: 100%;
  border-radius: 6px;
  pointer-events: none;
  box-shadow: 0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
}
.card .card-header.card-header-image .card-title {
  position: absolute;
  bottom: 15px;
  left: 15px;
  color: #fff;
  font-size: 1.125rem;
  text-shadow: 0 2px 5px rgba(33, 33, 33, 0.5);
}
.card .card-header.card-header-image .colored-shadow {
  -webkit-transform: scale(0.94);
  transform: scale(0.94);
  top: 12px;
  -webkit-filter: blur(12px);
  filter: blur(12px);
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  z-index: -1;
  -webkit-transition: opacity 0.45s;
  transition: opacity 0.45s;
  opacity: 0;
}
.card .card-header.card-header-image.no-shadow {
  box-shadow: none;
}
.card .card-header.card-header-image.no-shadow.shadow-normal {
  box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
}
.card .card-header.card-header-image.no-shadow .colored-shadow {
  display: none !important;
}
.card .card-header-primary,
.card.bg-primary,
.card.card-rotate.bg-primary .front,
.card.card-rotate.bg-primary .back {
  background: linear-gradient(60deg, #ab47bc, #7b1fa2);
}
.card .card-header-info,
.card.bg-info,
.card.card-rotate.bg-info .front,
.card.card-rotate.bg-info .back {
  background: linear-gradient(60deg, #26c6da, #0097a7);
}
.card .card-header-success,
.card.bg-success,
.card.card-rotate.bg-success .front,
.card.card-rotate.bg-success .back {
  background: linear-gradient(60deg, #66bb6a, #388e3c);
}
.card .card-header-warning,
.card.bg-warning,
.card.card-rotate.bg-warning .front,
.card.card-rotate.bg-warning .back {
  background: linear-gradient(60deg, #ffa726, #f57c00);
}
.card .card-header-danger,
.card.bg-danger,
.card.card-rotate.bg-danger .front,
.card.card-rotate.bg-danger .back {
  background: linear-gradient(60deg, #ef5350, #d32f2f);
}
.card .card-header-rose,
.card.bg-rose,
.card.card-rotate.bg-rose .front,
.card.card-rotate.bg-rose .back {
  background: linear-gradient(60deg, #ec407a, #c2185b);
}
.card .card-header-primary {
  box-shadow: 0 5px 20px 0px rgba(0, 0, 0, 0.2), 0 13px 24px -11px rgba(156, 39, 176, 0.6);
}
.card .card-header-danger {
  box-shadow: 0 5px 20px 0px rgba(0, 0, 0, 0.2), 0 13px 24px -11px rgba(244, 67, 54, 0.6);
}
.card .card-header-rose {
  box-shadow: 0 5px 20px 0px rgba(0, 0, 0, 0.2), 0 13px 24px -11px rgba(233, 30, 99, 0.6);
}
.card .card-header-warning {
  box-shadow: 0 5px 20px 0px rgba(0, 0, 0, 0.2), 0 13px 24px -11px rgba(255, 152, 0, 0.6);
}
.card .card-header-info {
  box-shadow: 0 5px 20px 0px rgba(0, 0, 0, 0.2), 0 13px 24px -11px rgba(0, 188, 212, 0.6);
}
.card .card-header-success {
  box-shadow: 0 5px 20px 0px rgba(0, 0, 0, 0.2), 0 13px 24px -11px rgba(76, 175, 80, 0.6);
}
.card [class*="header-"],
.card[class*="bg-"] {
  color: #fff;
}
.card [class*="header-"] .card-title a,
.card [class*="header-"] .card-title,
.card [class*="header-"] .icon i,
.card[class*="bg-"] .card-title a,
.card[class*="bg-"] .card-title,
.card[class*="bg-"] .icon i {
  color: #fff;
}
.card [class*="header-"] .icon i,
.card[class*="bg-"] .icon i {
  border-color: rgba(255, 255, 255, 0.25);
}
.card [class*="header-"] .author a,
.card [class*="header-"] .stats,
.card [class*="header-"] .card-category,
.card [class*="header-"] .card-description,
.card[class*="bg-"] .author a,
.card[class*="bg-"] .stats,
.card[class*="bg-"] .card-category,
.card[class*="bg-"] .card-description {
  color: rgba(255, 255, 255, 0.8);
}
.card [class*="header-"] .author a:hover,
.card [class*="header-"] .author a:focus,
.card [class*="header-"] .author a:active,
.card[class*="bg-"] .author a:hover,
.card[class*="bg-"] .author a:focus,
.card[class*="bg-"] .author a:active {
  color: #fff;
}
.card .author .avatar {
  width: 30px;
  height: 30px;
  overflow: hidden;
  border-radius: 50%;
  margin-right: 5px;
}
.card .author a {
  color: #3c4858;
  text-decoration: none;
}
.card .author a .ripple-container {
  display: none;
}
.card .card-category-social .fa {
  font-size: 24px;
  position: relative;
  margin-top: -4px;
  top: 2px;
  margin-right: 5px;
}
.card .card-category-social .material-icons {
  position: relative;
  top: 5px;
}
.card[class*="bg-"],
.card[class*="bg-"] .card-body {
  border-radius: 6px;
}
.card[class*="bg-"] h1 small,
.card[class*="bg-"] h2 small,
.card[class*="bg-"] h3 small,
.card[class*="bg-"] .card-body h1 small,
.card[class*="bg-"] .card-body h2 small,
.card[class*="bg-"] .card-body h3 small {
  color: rgba(255, 255, 255, 0.8);
}
.card .card-stats {
  background: transparent;
  display: -webkit-box;
  display: flex;
}
.card .card-stats .author,
.card .card-stats .stats {
  display: -webkit-inline-box;
  display: inline-flex;
}

.card-plain {
  background: transparent;
  box-shadow: none;
}
.card-plain .card-header:not(.card-avatar) {
  margin-left: 0;
  margin-right: 0;
}
.card-plain .card-body {
  padding-left: 5px;
  padding-right: 5px;
}
.card-plain .card-header-image {
  margin: 0 !important;
  border-radius: 6px;
}
.card-plain .card-header-image img {
  border-radius: 6px;
}
.card-plain .card-footer {
  padding-left: 5px;
  padding-right: 5px;
  background-color: transparent;
}

.card-background,
.back-background,
.front-background {
  background-position: center center;
  background-size: cover;
  text-align: center;
}
.card-background .card-body,
.back-background .card-body,
.front-background .card-body {
  position: relative;
  z-index: 2;
  min-height: 280px;
  padding-top: 40px;
  padding-bottom: 40px;
  max-width: 440px;
  margin: 0 auto;
}
.card-background .card-category,
.back-background .card-category,
.front-background .card-category,
.card-background .card-description,
.back-background .card-description,
.front-background .card-description,
.card-background small,
.back-background small,
.front-background small {
  color: rgba(255, 255, 255, 0.7) !important;
}
.card-background .card-title,
.back-background .card-title,
.front-background .card-title {
  color: #fff;
  margin-top: 10px;
}

.card-background:after,
.back-background:after,
.front-background:after {
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: block;
  left: 0;
  top: 0;
  content: "";
  background-color: rgba(0, 0, 0, 0.56);
  border-radius: 6px;
}

.card-blog {
  margin-top: 60px;
}
.card-blog [class*="col-"] .card-header-image img {
  width: 100%;
}
.card-blog .carf-footer .stats .material-icons {
  font-size: 18px;
  position: relative;
  top: 4px;
  width: 19px;
}

.card-collapse,
.card-collapse .card-header {
  box-shadow: none;
  background-color: transparent;
  border-radius: 0;
}

.card-collapse {
  margin: 0;
}
.card-collapse .card-header {
  border-bottom: 1px solid #ddd;
  padding: 25px 10px 5px 0px;
  margin: 0;
  box-shadow: none !important;
  background: #ffffff;
}
.card-collapse .card-header a {
  color: #3c4858;
  font-size: 0.9375rem;
  display: block;
}
.card-collapse .card-header a:hover,
.card-collapse .card-header a:active,
.card-collapse .card-header a[aria-expanded="true"] {
  color: #e91e63;
}
.card-collapse .card-header a i {
  float: right;
  top: 4px;
  position: relative;
}
.card-collapse .card-header a[aria-expanded="true"] i {
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
}
.card-collapse .card-body {
  padding: 15px 0px 5px;
}
.card-collapse .card-body .form-check {
  margin-left: 5px;
}

.card-form-horizontal .card-body {
  padding-left: 15px;
  padding-right: 15px;
}

.card-form-horizontal .form-group .form-control,
.card-form-horizontal .input-group .form-control {
  margin-bottom: 0;
}

.card-form-horizontal form {
  margin: 0;
}

.card-form-horizontal .input-group .input-group-addon {
  padding-left: 0;
}

.card-form-horizontal .bmd-form-group {
  padding-bottom: 0px;
  padding-top: 0;
}

.card-product {
  margin-top: 30px;
}

.card-product .card-footer .price h4 {
  margin-bottom: 0;
}

.card-product .card-title,
.card-product .card-category,
.card-product .card-description {
  text-align: center;
}
.card-product .category {
  margin-bottom: 0;
}
.card-product .category ~ .card-title {
  margin-top: 0;
}
.card-product .price {
  font-size: 18px;
  color: #9a9a9a;
}
.card-product .price-old {
  text-decoration: line-through;
  font-size: 16px;
  color: #9a9a9a;
}
.card-product .price-new {
  color: #f44336;
}

.noUi-target,
.noUi-target * {
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-user-select: none;
  touch-action: none;
  -ms-user-select: none;
  -moz-user-select: none;
  user-select: none;
  box-sizing: border-box;
}

.noUi-target {
  position: relative;
  direction: ltr;
}

.noUi-base,
.noUi-connects {
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
}

/* Wrapper for all connect elements.
 */
.noUi-connects {
  overflow: hidden;
  z-index: 0;
}

.noUi-connect,
.noUi-origin {
  will-change: transform;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  -ms-transform-origin: 0 0;
  -webkit-transform-origin: 0 0;
  -webkit-transform-style: preserve-3d;
  transform-origin: 0 0;
  -webkit-transform-style: flat;
  transform-style: flat;
}

.noUi-connect {
  height: 100%;
  width: 100%;
}

.noUi-origin {
  height: 10%;
  width: 9%;
}

/* Offset direction
 */
html:not([dir="rtl"]) .noUi-horizontal .noUi-origin {
  left: auto;
  right: -9px;
}

/* Give origins 0 height/width so they don't interfere with clicking the
 * connect elements.
 */
.noUi-vertical .noUi-origin {
  width: 0;
}

.noUi-horizontal .noUi-origin {
  height: 0;
}

.noUi-handle {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  position: absolute;
}

.noUi-touch-area {
  height: 100%;
  width: 100%;
}

.noUi-state-tap .noUi-connect,
.noUi-state-tap .noUi-origin {
  -webkit-transition: transform 0.3s;
  -webkit-transition: -webkit-transform 0.3s;
  transition: -webkit-transform 0.3s;
  transition: transform 0.3s;
  transition: transform 0.3s, -webkit-transform 0.3s;
}

.noUi-state-drag * {
  cursor: inherit !important;
}

/* Slider size and handle placement;
 */
.noUi-horizontal {
  height: 2px;
  margin: 15px 0;
}

.noUi-horizontal .noUi-handle {
  box-sizing: border-box;
  width: 14px;
  height: 14px;
  left: -6px;
  top: -7px;
  cursor: pointer;
  border-radius: 100%;
  -webkit-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
  border: 1px solid #9c27b0;
  background: #fff;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
}

.noUi-target {
  background: #c8c8c8;
  border-radius: 4px;
}

.noUi-connects {
  border-radius: 3px;
}

.noUi-connect {
  background: #3fb8af;
}

/* Handles and cursors;
 */
.noUi-draggable {
  cursor: ew-resize;
}

.noUi-vertical .noUi-draggable {
  cursor: ns-resize;
}

.noUi-handle {
  box-sizing: border-box;
  width: 14px;
  height: 14px;
  left: -10px;
  top: -6px;
  cursor: pointer;
  border-radius: 100%;
  -webkit-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
  border: 1px solid;
  background: #fff;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
}

.noUi-active {
  box-shadow: inset 0 0 1px #fff, inset 0 1px 7px #ddd, 0 3px 6px -3px #bbb;
  -webkit-transform: scale3d(1.5, 1.5, 1);
  transform: scale3d(1.5, 1.5, 1);
}

.slider {
  background: #c8c8c8;
}
.slider .noUi-connect {
  background-color: #9c27b0;
  border-radius: 4px;
}
.slider .noUi-handle {
  border-color: #9c27b0;
}
.slider.slider-info .noUi-connect {
  background-color: #00bcd4;
}
.slider.slider-info .noUi-handle {
  border-color: #00bcd4;
}
.slider.slider-success .noUi-connect {
  background-color: #4caf50;
}
.slider.slider-success .noUi-handle {
  border-color: #4caf50;
}
.slider.slider-warning .noUi-connect {
  background-color: #ff9800;
}
.slider.slider-warning .noUi-handle {
  border-color: #ff9800;
}
.slider.slider-danger .noUi-connect {
  background-color: #f44336;
}
.slider.slider-danger .noUi-handle {
  border-color: #f44336;
}
.slider.slider-rose .noUi-connect {
  background-color: #e91e63;
}
.slider.slider-rose .noUi-handle {
  border-color: #e91e63;
}

.ecommerce-page .container {
  position: relative;
  z-index: 2;
}

.ecommerce-page .card-header .container {
  padding-top: 20vh;
  color: #ffffff;
  text-align: center;
}

.ecommerce-page .card-refine.card-rose a:hover,
.ecommerce-page .card-refine.card-rose a[aria-expanded="true"] {
  color: #e91e63;
}

.ecommerce-page .card-refine .card-body {
  padding-left: 15px;
  padding-right: 15px;
}
.ecommerce-page .card-refine .card-body.card-refine {
  padding-left: 15px;
  padding-right: 15px;
}
.ecommerce-page .card-refine .card-body .card-collapse .card-body {
  max-height: 273px;
  overflow-y: scroll;
}

.ecommerce-page .card-refine .card-heading i {
  float: none;
}

.ecommerce-page .card-refine .price-right,
.ecommerce-page .card-refine .price-left {
  font-weight: 500;
}

.ecommerce-page .card-refine .card {
  margin-bottom: 0;
}

.ecommerce-page .card-refine .checkbox input[type="checkbox"]:checked + .checkbox-material .check {
  background: #e91e63;
}

.ecommerce-page .card-form-horizontal form .form-group {
  width: 100%;
}
.ecommerce-page .card-form-horizontal form .form-group .form-control {
  width: 100%;
}

.ecommerce-page .card-product .price-container {
  display: -webkit-inline-box;
  display: inline-flex;
}

.ecommerce-page .card-product .image {
  overflow: hidden;
  border-radius: 6px;
}

.subscribe-line {
  padding: 1.875rem 0;
}
.subscribe-line .card {
  margin-top: 30px;
}
.subscribe-line.subscribe-line-image {
  position: relative;
  background-position: top center;
  background-size: cover;
}
.subscribe-line.subscribe-line-image .title {
  color: #fff;
}
.subscribe-line.subscribe-line-image:after {
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: block;
  left: 0;
  top: 0;
  content: "";
  background-color: rgba(0, 0, 0, 0.66);
}
.subscribe-line.subscribe-line-image .container {
  z-index: 2;
  position: relative;
}
.myClass {
  margin-top: 20px;
  margin-bottom: 20px;
}

.myPagination {
  margin-top: 50px;
}

.custombody {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: space-between;
  justify-content: center;
  height: 100%;
}
</style>
