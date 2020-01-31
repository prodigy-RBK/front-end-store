<template>
  <div class="wrapper">
    <parallax class="page-header product-page" :style="headerStyle">
      <div class="md-layout">
        <div class="md-layout-item">
          <div class="image-wrapper">
            <div class="brand">
              <h1>Shopping Cart</h1>
            </div>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="container">
        <div class="card card-plain">
          <div class="card-body">
            <h3 class="card-title">Shopping Cart</h3>
            <br />
            <div class="table-responsive">
              <table class="table table-shopping">
                <thead>
                  <tr>
                    <th class="text-center"></th>
                    <th>Product</th>
                    <th class="th-description">Color</th>
                    <th class="th-description">Size</th>
                    <th class="text-right">Price</th>
                    <th class="text-right">Qty</th>
                    <th class="text-right">Amount</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div class="img-container">
                        <img src="../assets/img/product2.jpg" alt="..." />
                      </div>
                    </td>
                    <td class="td-name">
                      <a href="#pants">Short Pants</a>
                      <br />
                      <small>by Pucci</small>
                    </td>
                    <td>
                      Purple
                    </td>
                    <td>
                      M
                    </td>
                    <td class="td-number"><small>&euro;</small>499</td>
                    <td class="td-number">
                      2
                      <div class="md-group md-group-sm">
                        <md-button class=" md-round md-info">
                          <i class="material-icons">remove</i>
                        </md-button>
                        <md-button class=" md-round md-info">
                          <i class="material-icons">add</i>
                        </md-button>
                      </div>
                    </td>
                    <td class="td-number"><small>&euro;</small>998</td>
                    <td class="td-actions">
                      <md-button rel="tooltip" data-placement="left" title="Remove item" class=" md-simple">
                        <i class="material-icons">close</i>
                      </md-button>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="3"></td>
                    <td class="td-total">
                      Total
                    </td>
                    <td colspan="1" class="td-price"><small>&euro;</small>2,346</td>
                    <td colspan="1"></td>
                    <td colspan="2" class="text-right">
                      <md-button class="md-info md-round">
                        Complete Purchase
                        <i class="material-icons">keyboard_arrow_right</i>
                      </md-button>
                    </td>
                  </tr>
                  <!-- <tr>
                  <td colspan="6"></td>
                  <td colspan="2" class="text-right">
                    <md-button type="button" class=" md-info md-round">Complete Purchase <i class="material-icons">keyboard_arrow_right</i></md-button>
                  </td>
                </tr> -->
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "shopping-cart",
  bodyClass: "index-page",
  props: {
    image: {
      type: String,
      default: require("@/assets/img/vue-mk-header.jpg")
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
      firstname: null,
      email: null,
      password: null,
      leafShow: false
    };
  },
  methods: {
    leafActive() {
      if (window.innerWidth < 768) {
        this.leafShow = false;
      } else {
        this.leafShow = true;
      }
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
    }
  },
  mounted() {
    this.leafActive();
    window.addEventListener("resize", this.leafActive);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.leafActive);
  }
};
</script>

<style>
.card {
  font-size: 0.875rem;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -ms-overflow-style: scrollbar;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

body {
  margin: 0;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: left;
  background-color: #fafafa;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 0;
  margin-bottom: 0.5rem;
}

small {
  font-size: 80%;
  font-weight: 400;
}

a {
  color: #9c27b0;
  text-decoration: none;
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
}

a:hover {
  color: #0a6ebd;
  text-decoration: underline;
}

img {
  vertical-align: middle;
  border-style: none;
}

th {
  text-align: inherit;
}

button {
  border-radius: 0;
}

input,
button,
select,
optgroup,
textarea {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

button,
input {
  overflow: visible;
}

button,
select {
  text-transform: none;
}

button,
html [type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

h1,
h2,
h3,
h4,
h5,
h6,
.h1,
.h2,
.h3,
.h4,
.h5,
.h6 {
  margin-bottom: 0.5rem;
  font-family: inherit;
  font-weight: 400;
  line-height: 1.2;
  color: inherit;
}

h1,
.h1 {
  font-size: 2.5rem;
}

h2,
.h2 {
  font-size: 2rem;
}

h3,
.h3 {
  font-size: 1.75rem;
}

.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}
@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}
@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}
@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}

.row {
  display: -webkit-box;
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.col-1,
.col-2,
.col-3,
.col-4,
.col-5,
.col-6,
.col-7,
.col-8,
.col-9,
.col-10,
.col-11,
.col-12,
.col,
.col-auto,
.col-sm-1,
.col-sm-2,
.col-sm-3,
.col-sm-4,
.col-sm-5,
.col-sm-6,
.col-sm-7,
.col-sm-8,
.col-sm-9,
.col-sm-10,
.col-sm-11,
.col-sm-12,
.col-sm,
.col-sm-auto,
.col-md-1,
.col-md-2,
.col-md-3,
.col-md-4,
.col-md-5,
.col-md-6,
.col-md-7,
.col-md-8,
.col-md-9,
.col-md-10,
.col-md-11,
.col-md-12,
.col-md,
.col-md-auto,
.col-lg-1,
.col-lg-2,
.col-lg-3,
.col-lg-4,
.col-lg-5,
.col-lg-6,
.col-lg-7,
.col-lg-8,
.col-lg-9,
.col-lg-10,
.col-lg-11,
.col-lg-12,
.col-lg,
.col-lg-auto,
.col-xl-1,
.col-xl-2,
.col-xl-3,
.col-xl-4,
.col-xl-5,
.col-xl-6,
.col-xl-7,
.col-xl-8,
.col-xl-9,
.col-xl-10,
.col-xl-11,
.col-xl-12,
.col-xl,
.col-xl-auto {
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
}

.col-md-8 {
  -webkit-box-flex: 0;
  flex: 0 0 66.66667%;
  max-width: 66.66667%;
}

.table {
  width: 100%;
  max-width: 100%;
  margin-bottom: 1rem;
  background-color: transparent;
}
.table th,
.table td {
  padding: 0.75rem;
  vertical-align: top;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
}
.table thead th {
  vertical-align: bottom;
  border-bottom: 2px solid rgba(0, 0, 0, 0.06);
}

.table-responsive {
  display: block;
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
}
.table-responsive > .table-bordered {
  border: 0;
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

.text-left {
  text-align: left !important;
}

.text-right {
  text-align: right !important;
}

.text-center {
  text-align: center !important;
}

body {
  background-color: #eee;
  color: #3c4858;
  font-weight: 300;
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

.main {
  background: #ffffff;
  position: relative;
  z-index: 3;
}

.main-raised {
  margin: -60px 30px 0px;
  border-radius: 6px;
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
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

small,
.small {
  font-size: 75%;
  color: #777;
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

h2.title {
  margin-bottom: 1rem;
}

.table > thead > tr > th {
  border-bottom-width: 1px;
  font-size: 1.0625rem;
  font-weight: 300;
}

.table .form-check {
  margin: 0;
}
.table .form-check .form-check-sign {
  top: -13px;
  left: 0;
  padding-right: 0;
}

.table .radio,
.table .checkbox {
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  width: 15px;
}
.table .radio .icons,
.table .checkbox .icons {
  position: relative;
}

.table > thead > tr > th,
.table > tbody > tr > th,
.table > tfoot > tr > th,
.table > thead > tr > td,
.table > tbody > tr > td,
.table > tfoot > tr > td {
  padding: 12px 8px;
  vertical-align: middle;
  border-color: #ddd;
  font-size: 0.875rem;
}

.table thead tr th {
  font-size: 1.063rem;
}

.table .th-description {
  max-width: 150px;
}

.table .td-price {
  font-size: 26px;
  font-weight: 300;
  margin-top: 5px;
  text-align: right;
}

.table .td-total {
  font-weight: 500;
  font-size: 1.0625rem;
  padding-top: 20px;
  text-align: right;
}

.table .td-actions .btn {
  margin: 0px;
  padding: 5px;
}

.table > tbody > tr {
  position: relative;
}

.table-shopping > thead > tr > th {
  font-size: 0.75rem;
  text-transform: uppercase;
}

.table-shopping > tbody > tr > td {
  font-size: 14px;
}
.table-shopping > tbody > tr > td b {
  display: block;
  margin-bottom: 5px;
}

.table-shopping .td-name {
  font-weight: 400;
  font-size: 1.5em;
  line-height: 1.42857143;
}
.table-shopping .td-name small {
  color: #999;
  font-size: 0.75em;
  font-weight: 300;
}

.table-shopping .td-number {
  font-weight: 300;
  font-size: 1.125rem;
}

.table-shopping .td-name {
  min-width: 200px;
}

.table-shopping .td-number {
  text-align: right;
  min-width: 150px;
}
.table-shopping .td-number small {
  margin-right: 3px;
}

.table-shopping .img-container {
  width: 120px;
  max-height: 160px;
  overflow: hidden;
  display: block;
}
.table-shopping .img-container img {
  width: 100%;
}

.table-inverse {
  color: rgba(255, 255, 255, 0.84);
}

.table thead th {
  font-size: 0.95rem;
  font-weight: 500;
  color: #555;
  border-top-width: 0;
  border-bottom-width: 1px;
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

thead th {
  border: none !important;
}
</style>
