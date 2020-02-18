<template>
  <md-toolbar
    :key="renderCount"
    id="toolbar"
    md-elevation="0"
    class="md-transparent md-absolute"
    :class="extraNavClasses"
    :color-on-scroll="colorOnScroll"
  >
    <div class="md-toolbar-row md-collapse-lateral" style="max-width: 1500px">
      <div class="md-toolbar-section-start">
        <router-link to="/">
          <img
            style="width: 200px; height:50px"
            :src="
              toggleImage
                ? 'https://scontent.ftun4-1.fna.fbcdn.net/v/t1.15752-9/s2048x2048/86376678_219532949204480_3757337832645984256_n.png?_nc_cat=111&_nc_ohc=c6nHzh9V7jwAX_JepJ9&_nc_ht=scontent.ftun4-1.fna&oh=8d933b52f668784ad993f4f84a77daf4&oe=5EC6D0F6'
                : 'https://ci5.googleusercontent.com/proxy/U8CeHzk689Vja-PFDt-nqUlHktVFqQmraEJ7YbA9VSGUpFo0Eiqi6eb-MuRull6awuhL94WBuwOrJBi-4fvd0qOn7t_IQGtCS7g3n0ZwZAsHWWgeu_iLFhOA2Q81ai4sDfkMRNxnODMnShWaMflcTQHSQ7YFPw1FN8tpDRBu4Hemunm6C5fCX8ap2fK8M5Ety1ux9g_5_CDXeD_F9qqL0DjmukQ4sYPzdmPtOSX9QsIWU1MgvsFccmuN-b78Y5XyiMLQU7__LF0kpUTRbv6Ye7IbCcILufNGW1EyWuyIHafNyKdBd6Y74fM_pluonCE8n-szJbiEtKyc=s0-d-e1-ft#https://scontent.ftun4-1.fna.fbcdn.net/v/t1.15752-9/s2048x2048/86722894_806476143164319_5779365936901390336_n.png?_nc_cat=101&_nc_ohc=kE3K6H3Cik4AX9f9XqV&_nc_ht=scontent.ftun4-1.fna&oh=cf08d4eaa46d4118257097616d6dc9be&oe=5F011AA2'
            "
          />
        </router-link>
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
                <router-link :to="'/products/' + item._id" exact :md-term="term">
                  <div style="display: flex;">
                    <div class="imageDiv">
                      <img :src="item.images[0]" />
                    </div>
                    <div class="itemDiv" @click="sendtrigger(item._id)">
                      <h6>{{ item.title }}</h6>
                      <p>{{ item.description }}</p>
                      <h6 class="detailsDiv">$ {{ item.price }}</h6>
                    </div>
                  </div>
                </router-link>
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
              <md-list-item @click="getProducts">
                <router-link to="/" exact>
                  <i class="fa fa-venus-mars"></i>
                  <p>All</p>
                </router-link>
              </md-list-item>
              <md-list-item @click="getProducts">
                <router-link to="/men">
                  <i class="fa fa-mars"></i>
                  <p>Men</p>
                </router-link>
              </md-list-item>
              <md-list-item @click="getProducts">
                <router-link to="/women">
                  <i class="fa fa-venus"></i>
                  <p>Women</p>
                </router-link>
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
                        <i class="material-icons">person</i>
                      </md-button>
                      <ul class="dropdown-menu dropdown-with-icons">
                        <li>
                          <router-link v-if="isAuthed" to="/account" exact>
                            <i class="material-icons">view_day</i>
                            <p>Account</p>
                          </router-link>
                        </li>
                        <li>
                          <router-link v-if="!isAuthed" to="/login" exact>
                            <i class="material-icons">fingerprint</i>
                            <p>Login</p>
                          </router-link>
                        </li>
                        <li>
                          <router-link v-if="!isAuthed" to="/register" exact>
                            <i class="material-icons">account_circle</i>
                            <p>Register</p>
                          </router-link>
                        </li>
                        <li>
                          <router-link v-if="isAuthed" to="/" @click.native="logout">
                            <i class="material-icons">power_settings_new</i>
                            <p>Logout</p>
                          </router-link>
                        </li>
                      </ul>
                    </drop-down>
                  </div>
                </a>
              </li>
              <md-list-item>
                <router-link to="/wishlist" exact>
                  <i class="material-icons">favorite</i>
                </router-link>
              </md-list-item>
              <md-badge
                class="md-primary"
                md-position="top"
                :md-content="this.$store.state.cart.length"
              >
                <md-list-item>
                  <router-link to="/shoppingCart" exact>
                    <i class="material-icons">shopping_cart</i>
                  </router-link>
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
      renderCount: 0,
      isAuthed: false,
      toggleImage: true,
      extraNavClasses: "",
      toggledClass: false,
      selectedProduct: "",
      products: this.$store.state.products
    };
  },
  methods: {
    logout() {
      this.isAuthed = false;
      this.$store.commit("UPDATE_LOGIN", false);
      delete window.localStorage["x-token"];
      delete window.localStorage["x-refresh-token"];
      var newvuex = JSON.parse(window.localStorage["vuex"]);
      delete newvuex["wishlist"];
      window.localStorage.vuex = JSON.stringify(newvuex);
      this.renderCount++;
    },
    async sendtrigger(productid) {
      try {
        let { data } = await axios.get(
          `https://prodigy-rbk.herokuapp.com/api/user/verifytoken`
        );

        if (data.iduser !== undefined) {
          this.$ga.event({
            eventCategory: productid,
            eventAction: "clicked product",
            eventLabel: data.iduser
          });
        }
      } catch (err) {}
    },
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
        this.toggleImage = false;
        this.extraNavClasses = `md-${this.type}`;
        navbarColor.classList.remove("md-transparent");
      } else {
        if (this.extraNavClasses) {
          this.toggleImage = true;
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
    },
    async getProducts() {
      let gender = window.location.pathname.split("/")[1];
      if (gender === "") {
        this.getAllProducts();
      } else {
        gender =
          gender[0].toUpperCase() +
          window.location.pathname.split("/")[1].slice(1);
        let { data } = await axios.get(
          `https://prodigy-rbk.herokuapp.com/api/products/gender/${gender}`
        );
        this.$store.commit("ADD_PRODUCTS", data);
        this.$store.commit("DISPLAY_PRODUCTS", data);
      }
    },
    async getAllProducts() {
      let { data } = await axios.get(
        `https://prodigy-rbk.herokuapp.com/api/products/allproducts`
      );
      this.$store.commit("ADD_PRODUCTS", data);
      this.$store.commit("DISPLAY_PRODUCTS", data);
    }
  },
  async beforeMount() {
    try {
      await this.getAllProducts();
      await axios.get("https://prodigy-rbk.herokuapp.com/api/user/verifytoken");
      this.$root.$emit("login", true);
      this.$store.dispatch("UPDATE_USER_WISHLIST");
    } catch (err) {
      this.$root.$emit("login", false);
    }
  },
  mounted() {
    document.addEventListener("scroll", this.scrollListener);
    this.$root.$on("login", boo => {
      this.isAuthed = boo;
      this.$store.commit("UPDATE_LOGIN", boo);
    });
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
