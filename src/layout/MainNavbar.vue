<template>
  <md-toolbar
    id="toolbar"
    md-elevation="0"
    class="md-transparent md-absolute"
    :class="extraNavClasses"
    :color-on-scroll="colorOnScroll"
  >
    <div class="md-toolbar-row md-collapse-lateral">
      <div class="md-toolbar-section-start">
        <h3 class="md-title">Prodigy Strore</h3>
      </div>
      <div class="md-toolbar-section-end">
        <md-button
          class="md-just-icon md-simple md-toolbar-toggle"
          :class="{ toggled: toggledClass }"
          @click="toggleNavbarMobile()"
        >
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </md-button>

        <div class="md-collapse">
          <div class="md-autocomplete" style="display: flex; width: 500px !important;">
            <md-autocomplete
              :class="{ toggled: toggledClass }"
              v-model="selectedProduct"
              :md-options="products"
              :md-open-on-focus="false"
              :md-fuzzy-search="false"
              style="display: flex; width: 500px !important;"
            >
              <label>Search...</label>

              <template slot="md-autocomplete-item" slot-scope="{ item, term }">
                <a class="anchorCustom" :md-term="term" :href="'/products/' + item._id">
                  <div style="display: flex;">
                    <div class="imageDiv">
                      <img :src="item.images[0]" />
                    </div>
                    <div class="itemDiv">
                      <h6>{{ item.title }}</h6>
                      <p>{{ item.description }}</p>
                      <h6 class="detailsDiv">$ {{ item.price }}</h6>
                    </div>
                  </div>
                </a>
              </template>

              <template
                slot="md-autocomplete-empty"
                slot-scope="{ term }"
              >No items matching "{{ term }}" were found.</template>
            </md-autocomplete>
          </div>
          <div class="md-collapse-wrapper">
            <mobile-menu nav-mobile-section-start="false">
              <!-- Here you can add your items from the section-start of your toolbar -->
            </mobile-menu>
            <md-list>
              <md-list-item href="/">
                <i class="material-icons">layers</i>
                <p>Home</p>
              </md-list-item>

              <md-list-item
                href="https://demos.creative-tim.com/vue-material-kit/documentation/"
                target="_blank"
              >
                <i class="material-icons">content_paste</i>
                <p>Documentation</p>
              </md-list-item>

              <li class="md-list-item">
                <a
                  href="javascript:void(0)"
                  class="md-list-item-router md-list-item-container md-button-clean dropdown"
                >
                  <div class="md-list-item-content">
                    <drop-down direction="down">
                      <md-button
                        slot="title"
                        class="md-button md-button-link md-white md-simple dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        <i class="material-icons">view_carousel</i>
                        <p>Views</p>
                      </md-button>
                      <ul class="dropdown-menu dropdown-with-icons">
                        <li>
                          <a href="/products">
                            <i class="material-icons">view_day</i>
                            <p>Products</p>
                          </a>
                        </li>
                        <li>
                          <a href="/productDetails">
                            <i class="material-icons">fingerprint</i>
                            <p>Product Details</p>
                          </a>
                        </li>
                        <li>
                          <a href="/shoppingCart">
                            <i class="material-icons">account_circle</i>
                            <p>Shopping Cart</p>
                          </a>
                        </li>
                      </ul>
                    </drop-down>
                  </div>
                </a>
              </li>
              <li class="md-list-item">
                <a
                  href="javascript:void(0)"
                  class="md-list-item-router md-list-item-container md-button-clean dropdown"
                >
                  <div class="md-list-item-content">
                    <drop-down direction="down">
                      <md-button
                        slot="title"
                        class="md-button md-button-link md-white md-simple dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        <i class="material-icons">person</i>
                      </md-button>
                      <ul class="dropdown-menu dropdown-with-icons">
                        <li>
                          <a href="/account">
                            <i class="material-icons">view_day</i>
                            <p>Account</p>
                          </a>
                        </li>
                        <li>
                          <a href="/login">
                            <i class="material-icons">fingerprint</i>
                            <p>Login</p>
                          </a>
                        </li>
                        <li>
                          <a href="/register">
                            <i class="material-icons">account_circle</i>
                            <p>Register</p>
                          </a>
                        </li>
                      </ul>
                    </drop-down>
                  </div>
                </a>
              </li>
              <md-list-item href="/wishlist">
                <i class="material-icons">favorite</i>
              </md-list-item>
              <md-badge
                class="md-primary"
                md-position="top"
                :md-content="this.$store.state.cart.length"
              >
                <md-list-item href="/shoppingCart">
                  <i class="material-icons">shopping_cart</i>
                </md-list-item>
              </md-badge>
            </md-list>
          </div>
        </div>
      </div>
    </div>
  </md-toolbar>
</template>

<script>
import axios from "axios";
let resizeTimeout;
function resizeThrottler(actualResizeHandler) {
  // ignore resize events as long as an actualResizeHandler execution is in the queue
  if (!resizeTimeout) {
    resizeTimeout = setTimeout(() => {
      resizeTimeout = null;
      actualResizeHandler();

      // The actualResizeHandler will execute at a rate of 15fps
    }, 66);
  }
}

import MobileMenu from "@/layout/MobileMenu";
export default {
  components: {
    MobileMenu
  },
  props: {
    type: {
      type: String,
      default: "white",
      validator(value) {
        return [
          "white",
          "default",
          "primary",
          "danger",
          "success",
          "warning",
          "info"
        ].includes(value);
      }
    },
    colorOnScroll: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      extraNavClasses: "",
      toggledClass: false,
      selectedProduct: "",
      products: this.$store.state.products
    };
  },
  methods: {
    bodyClick() {
      let bodyClick = document.getElementById("bodyClick");

      if (bodyClick === null) {
        let body = document.querySelector("body");
        let elem = document.createElement("div");
        elem.setAttribute("id", "bodyClick");
        body.appendChild(elem);

        let bodyClick = document.getElementById("bodyClick");
        bodyClick.addEventListener("click", this.toggleNavbarMobile);
      } else {
        bodyClick.remove();
      }
    },
    toggleNavbarMobile() {
      this.NavbarStore.showNavbar = !this.NavbarStore.showNavbar;
      this.toggledClass = !this.toggledClass;
      this.bodyClick();
    },
    handleScroll() {
      let scrollValue =
        document.body.scrollTop || document.documentElement.scrollTop;
      let navbarColor = document.getElementById("toolbar");
      this.currentScrollValue = scrollValue;
      if (this.colorOnScroll > 0 && scrollValue > this.colorOnScroll) {
        this.extraNavClasses = `md-${this.type}`;
        navbarColor.classList.remove("md-transparent");
      } else {
        if (this.extraNavClasses) {
          this.extraNavClasses = "";
          navbarColor.classList.add("md-transparent");
        }
      }
    },
    scrollListener() {
      resizeThrottler(this.handleScroll);
    },
    scrollToElement() {
      let element_id = document.getElementById("downloadSection");
      if (element_id) {
        element_id.scrollIntoView({ block: "end", behavior: "smooth" });
      }
    }
  },
  async beforeMount() {
    try {
      await axios.get("http://localhost:3000/api/user/verifytoken");
      this.$store.commit("UPDATE_LOGIN", true);
    } catch (err) {
      console.log(err);
      this.$store.commit("UPDATE_LOGIN", false);
    }
  },
  mounted() {
    document.addEventListener("scroll", this.scrollListener);
  },
  beforeDestroy() {
    document.removeEventListener("scroll", this.scrollListener);
  }
};
</script>
<style scoped>
.imageDiv {
  padding-right: 10px;
  width: 100px !important;
  place-self: center;
}

.itemDiv {
  padding-left: 10px;
  width: 350px !important;
}

.detailsDiv {
  float: right;
}

.anchorCustom {
  display: block !important;
}
</style>
