<template>
  <md-card class="card-refine md-card-plain md-card-header-rose">
    <md-card-content>
      <h4 class="card-title">
        Refine
        <md-button
          class="md-just-icon md-simple pull-right"
          rel="tooltip"
          title
          data-original-title="Reset Filter"
        >
          <i class="material-icons">cached</i>
        </md-button>
      </h4>
      <!-- Section: Price Range part perfectly functionning-->
      <div id="accordion" role="tablist">
        <div class="card card-collapse" :class="accordionClass('isOpenOne')">
          <div class="card-header" role="tab" id="headingOne">
            <h5 class="mb-0">
              <a class="filter-header" @click="toggleAccordion('isOpenOne')">
                Price Range
                <i class="material-icons">keyboard_arrow_down</i>
              </a>
            </h5>
          </div>
          <div id="collapseOne" class="message-body">
            <slider v-model="sliders.rangeSlider" type="info" :connect="true"></slider>
            <div slot="sliderFooter" class="card-body card-refine">
              <span
                id="price-left"
                class="price-left pull-left"
                data-currency="€"
              >{{ this.sliders.rangeSlider[0] }}</span>
              <span
                id="price-right"
                class="price-right pull-right"
                data-currency="€"
              >{{ this.sliders.rangeSlider[1] }}</span>
            </div>
          </div>
        </div>
        <!-- Section: Brands filter -->
        <div class="card card-collapse" :class="accordionClass('isOpenTwo')">
          <div class="card-header" role="tab" id="headingTwo">
            <h5 class="mb-0">
              <a class="filter-header collapsed" @click="toggleAccordion('isOpenTwo')">
                Brands
                <i class="material-icons">keyboard_arrow_down</i>
              </a>
            </h5>
          </div>
          <div id="collapseTwo" class="message-body">
            <md-checkbox
              v-model="filters.brandsQuery"
              :value="brand._id"
              v-for="brand in brands"
              :key="brand._id"
            >{{ brand.name }}</md-checkbox>
          </div>
        </div>
        <!-- Section: Category filter -->
        <div class="card card-collapse" :class="accordionClass('isOpenThree')">
          <div class="card-header" role="tab" id="headingThree">
            <h5 class="mb-0">
              <a class="filter-header collapsed" @click="toggleAccordion('isOpenThree')">
                Category
                <i class="material-icons">keyboard_arrow_down</i>
              </a>
            </h5>
          </div>
          <div id="collapseThree" class="message-body">
            <md-checkbox
              v-model="filters.categoriesQuery"
              :value="category"
              v-for="(category, index) in categories"
              :key="index"
            >{{ category }}</md-checkbox>
          </div>
        </div>
        <!-- Section: Tags filter -->
        <div class="card card-collapse" :class="accordionClass('isOpenFour')">
          <div class="card-header" role="tab" id="headingFour">
            <h5 class="mb-0">
              <a class="filter-header collapsed" @click="toggleAccordion('isOpenFour')">
                Tags
                <i class="material-icons">keyboard_arrow_down</i>
              </a>
            </h5>
          </div>
          <div id="collapseFour" class="message-body">
            <md-checkbox
              v-model="filters.tagsQuery"
              :value="tag"
              v-for="(tag, index) in tags"
              :key="index"
            >{{ tag }}</md-checkbox>
          </div>
        </div>
      </div>
    </md-card-content>
  </md-card>
</template>

<script>
import { Slider } from "@/components";
import { mapMutations } from "vuex";
import axios from "axios";
import debounce from "lodash.debounce";

export default {
  name: "RegularCheckboxes",
  data: () => ({
    filters: {
      brandsQuery: [],
      categoriesQuery: [],
      tagsQuery: [],
      priceRange: [],
      priceRange: [0, 1000]
    },
    categories: [],
    tags: [],
    brands: [],
    sliders: {
      rangeSlider: [0, 1000]
    },
    control: {
      isOpenOne: true,
      isOpenTwo: false,
      isOpenThree: false,
      isOpenFour: true
    }
  }),
  methods: {
    ...mapMutations(["UPDATE_FILTERS"]),
    accordionClass: function(arg) {
      return {
        "is-closed": !this.control[arg],
        "is-primary": this.control[arg],
        "is-dark": !this.control[arg]
      };
    },
    toggleAccordion: function(arg) {
      this.control[arg] = !this.control[arg];
    },
    getBrands(gender) {
      return axios
        .get(`https://prodigy-rbk.herokuapp.com/api/brand`)
        .then(({ data }) => {
          this.brands = data;
          this.$store.commit("UPDATE_FILTERS", {
            filter: "brands",
            values: data
          });
        });
    },
    getTags(gender) {
      return axios
        .get(`https://prodigy-rbk.herokuapp.com/api/products/tags/${gender}`)
        .then(({ data }) => {
          this.tags = data;
          this.$store.commit("UPDATE_FILTERS", {
            filter: "tags",
            values: data
          });
        });
    },
    getCategories(gender) {
      return axios
        .get(
          `https://prodigy-rbk.herokuapp.com/api/products/categories/${gender}`
        )
        .then(({ data }) => {
          this.categories = data;
          this.$store.commit("UPDATE_FILTERS", {
            filter: "categories",
            values: data
          });
        });
    },
    updatePriceRange() {
      this.filters.priceRange = this.sliders.rangeSlider;
      this.$store.dispatch("UPDATE_DISPLAYED_PRODUCTS", this.filters);
    }
  },
  created: function() {
    // _.debounce is a function provided by lodash to limit how
    // often a particularly expensive operation can be run.
    // In this case, we want to limit how often we access
    // yesno.wtf/api, waiting until the user has completely
    // finished typing before making the ajax request. To learn
    // more about the _.debounce function (and its cousin
    // _.throttle), visit: https://lodash.com/docs#debounce
    this.debouncedupdatePriceRange = debounce(this.updatePriceRange, 1000);
  },
  async beforeMount() {
    // let gender = window.location.pathname.split("/")[1];
    let gender = "Men";
    await Promise.all([
      this.getCategories(gender),
      this.getBrands(gender),
      this.getTags(gender)
    ]);
  },
  watch: {
    "filters.brandsQuery": function() {
      this.$store.dispatch("UPDATE_DISPLAYED_PRODUCTS", this.filters);
    },
    "filters.categoriesQuery": function() {
      this.$store.dispatch("UPDATE_DISPLAYED_PRODUCTS", this.filters);
    },
    "filters.tagsQuery": function() {
      this.$store.dispatch("UPDATE_DISPLAYED_PRODUCTS", this.filters);
    },
    "sliders.rangeSlider": function() {
      this.debouncedupdatePriceRange();
    }
  }
};
</script>

<style scoped>
@import "../assets/css/buttons.css";

.collapse {
  display: none;
}
.collapse.show {
  display: block;
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
  box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56),
    0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
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
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
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
  box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
    0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
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
  box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56),
    0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
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
  box-shadow: 0 5px 15px -8px rgba(0, 0, 0, 0.24),
    0 8px 10px -5px rgba(0, 0, 0, 0.2);
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
  box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56),
    0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
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
  box-shadow: 0 5px 20px 0px rgba(0, 0, 0, 0.2),
    0 13px 24px -11px rgba(156, 39, 176, 0.6);
}
.card .card-header-danger {
  box-shadow: 0 5px 20px 0px rgba(0, 0, 0, 0.2),
    0 13px 24px -11px rgba(244, 67, 54, 0.6);
}
.card .card-header-rose {
  box-shadow: 0 5px 20px 0px rgba(0, 0, 0, 0.2),
    0 13px 24px -11px rgba(233, 30, 99, 0.6);
}
.card .card-header-warning {
  box-shadow: 0 5px 20px 0px rgba(0, 0, 0, 0.2),
    0 13px 24px -11px rgba(255, 152, 0, 0.6);
}
.card .card-header-info {
  box-shadow: 0 5px 20px 0px rgba(0, 0, 0, 0.2),
    0 13px 24px -11px rgba(0, 188, 212, 0.6);
}
.card .card-header-success {
  box-shadow: 0 5px 20px 0px rgba(0, 0, 0, 0.2),
    0 13px 24px -11px rgba(76, 175, 80, 0.6);
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

.ecommerce-page
  .card-refine
  .checkbox
  input[type="checkbox"]:checked
  + .checkbox-material
  .check {
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

.md-checkbox {
  display: flex;
}
.filter-header {
  cursor: pointer;
}
.message-body {
  padding: 0;
  max-height: 10em;
  overflow: hidden;
  transition: 0.3s ease all;
  overflow-y: auto;
}
.is-closed .message-body {
  max-height: 0;
}
</style>
