<template>
  <div class="wrapper">
    <parallax
      class="page-header header-filter header-small"
      filter-color="rose"
      parallax-active="true"
      :style="{
        'background-image': `url(${require('../assets/img/bg6.jpg')})`
      }"
    >
      <div class="container"></div>
    </parallax>

    <div class="section">
      <div class="container">
        <div class="main main-raised-custom main-product">
          <div class="row">
            <div class="col-md-6 col-sm-6">
              <div class="col-md-10 mr-auto ml-auto">
                <tabs :tab-images="product.images" plain nav-pills-images color-button="primary">
                  <!-- here you can add your content for tab-content -->

                  <div
                    :slot="'tab-pane-' + (index + 1)"
                    v-for="(image, index) in product.images"
                    :key="index"
                  >
                    <img :src="image" />
                  </div>
                </tabs>
              </div>
            </div>
            <div class="col-md-6 col-sm-6">
              <h2 class="title">{{ product.title }}</h2>
              <!-- <h4>{{brand.name}}</h4> -->
              <img :src="product.brand.image" style="width: 100px" />
              <h3 class="main-price">$ {{ product.price }}</h3>
              <h3 class="title">Description</h3>

              <md-card-content>{{ product.description }}</md-card-content>
              <div class="row pick-size">
                <div class="col-md-4 col-sm-4">
                  <div class="md-layout-item">
                    <div>
                      <md-menu md-size="big" class="big" md-align-trigger>
                        <md-button md-menu-trigger id="big">
                          <span
                            :style="[
                              activeSize
                                ? { color: 'black' }
                                : { color: 'grey' }
                            ]"
                          >{{ selectedSize }}</span>
                          <md-icon>keyboard_arrow_down</md-icon>
                        </md-button>
                        <md-menu-content>
                          <md-menu-item
                            v-for="size in sizes"
                            @click="
                              activeSize = true;
                              selectedSize = size;
                            "
                            :key="size"
                          >{{ size }}</md-menu-item>
                        </md-menu-content>
                      </md-menu>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 col-sm-4">
                  <div class="md-layout-item">
                    <div>
                      <md-menu md-size="big" class="big" md-align-trigger>
                        <md-button md-menu-trigger id="big">
                          <span
                            :style="[
                              activeColor
                                ? { color: 'black' }
                                : { color: 'grey' }
                            ]"
                          >{{ selectedColor }}</span>
                          <md-icon>keyboard_arrow_down</md-icon>
                        </md-button>
                        <md-menu-content>
                          <md-menu-item
                            v-for="color in colors"
                            @click="
                              activeColor = true;
                              selectedColor = color;
                            "
                            :key="color"
                          >{{ color }}</md-menu-item>
                        </md-menu-content>
                      </md-menu>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 col-sm-4" style="align-self: flex-end">
                  <div class="md-layout-item" style="height: 100%">
                    <div>
                      <md-menu md-size="big" class="big" md-align-trigger>
                        <md-input
                          style="padding: 10px"
                          type="number"
                          id="big"
                          min="1"
                          max="5"
                          v-model="selectedQuantity"
                        ></md-input>
                      </md-menu>
                    </div>
                  </div>
                </div>
              </div>
              <star-rating v-model="rating" :increment="0.5" :star-size="35" :inline="true"></star-rating>
              <div style="text-align-last: end;">
                <md-button @click="addToCart" class="float-left md-rose md-round">
                  Add to Cart &#xA0;
                  <i class="material-icons">shopping_cart</i>
                </md-button>
              </div>
            </div>
          </div>
        </div>
        <div class="features text-center">
          <div class="row">
            <div class="col-md-4">
              <div class="info">
                <div class="icon icon-info">
                  <i class="material-icons">local_shipping</i>
                </div>
                <h4 class="info-title">2 Days Delivery</h4>
                <p>
                  Divide details about your product or agency work into parts.
                  Write a few lines about each one. A paragraph describing a
                  feature will be enough.
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="info">
                <div class="icon icon-success">
                  <i class="material-icons">verified_user</i>
                </div>
                <h4 class="info-title">Refundable Policy</h4>
                <p>
                  Divide details about your product or agency work into parts.
                  Write a few lines about each one. A paragraph describing a
                  feature will be enough.
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="info">
                <div class="icon icon-rose">
                  <i class="material-icons">favorite</i>
                </div>
                <h4 class="info-title">Popular Item</h4>
                <p>
                  Divide details about your product or agency work into parts.
                  Write a few lines about each one. A paragraph describing a
                  feature will be enough.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="related-products">
          <h3 class="title text-center">You may also be interested in:</h3>
          <div class="row">
            <div class="col-lg-3 col-md-6">
              <div class="card card-product">
                <div class="md-card-header card-image">
                  <a href="#pablo">
                    <img class="img" src="../assets/img/examples/card-product1.jpg" />
                  </a>
                </div>
                <div class="card-body">
                  <h6 class="card-category text-rose">Trending</h6>
                  <h4 class="card-title">
                    <a href="#pablo">Dolce &amp; Gabbana</a>
                  </h4>
                  <div class="card-description">
                    Dolce &amp; Gabbana's 'Greta' tote has been crafted in Italy
                    from hard-wearing red textured-leather.
                  </div>
                </div>
                <div class="card-footer justify-content-between">
                  <div class="price">
                    <h4>$1,459</h4>
                  </div>
                  <div class="stats">
                    <md-button
                      rel="tooltip"
                      title="Saved to Wishlist"
                      class="md-just-icon md-simple md-rose"
                    >
                      <i class="material-icons">favorite</i>
                    </md-button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="card card-product">
                <div class="md-card-header card-image">
                  <a href="#pablo">
                    <img class="img" src="../assets/img/examples/card-product3.jpg" />
                  </a>
                </div>
                <div class="card-body">
                  <h6 class="card-category text-muted">Popular</h6>
                  <h4 class="card-title">
                    <a href="#pablo">Balmain</a>
                  </h4>
                  <div class="card-description">
                    Balmain's mid-rise skinny jeans are cut with stretch to
                    ensure they retain their second-skin fit but move
                    comfortably.
                  </div>
                </div>
                <div class="card-footer justify-content-between">
                  <div class="price">
                    <h4>$459</h4>
                  </div>
                  <div class="stats">
                    <md-button
                      rel="tooltip"
                      title="Saved to Wishlist"
                      class="md-just-icon md-simple md-simple"
                    >
                      <i class="material-icons">favorite</i>
                    </md-button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="card card-product">
                <div class="md-card-header card-image">
                  <a href="#pablo">
                    <img class="img" src="../assets/img/examples/card-product4.jpg" />
                  </a>
                </div>
                <div class="card-body">
                  <h6 class="card-category text-muted">Popular</h6>
                  <h4 class="card-title">
                    <a href="#pablo">Balenciaga</a>
                  </h4>
                  <div class="card-description">
                    Balenciaga's black textured-leather wallet is finished with
                    the label's iconic 'Giant' studs. This is where you can...
                  </div>
                </div>
                <div class="card-footer justify-content-between">
                  <div class="price">
                    <h4>$590</h4>
                  </div>
                  <div class="stats">
                    <md-button
                      rel="tooltip"
                      title="Saved to Wishlist"
                      class="md-just-icon md-simple md-rose"
                    >
                      <i class="material-icons">favorite</i>
                    </md-button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="card card-product">
                <div class="md-card-header card-image">
                  <a href="#pablo">
                    <img class="img" src="../assets/img/examples/card-product2.jpg" />
                  </a>
                </div>
                <div class="card-body">
                  <h6 class="card-category text-rose">Trending</h6>
                  <h4 class="card-title">
                    <a href="#pablo">Dolce &amp; Gabbana</a>
                  </h4>
                  <div class="card-description">
                    Dolce &amp; Gabbana's 'Greta' tote has been crafted in Italy
                    from hard-wearing red textured-leather.
                  </div>
                </div>
                <div class="card-footer justify-content-between">
                  <div class="price">
                    <h4>$1,459</h4>
                  </div>
                  <div class="stats">
                    <md-button
                      rel="tooltip"
                      title="Saved to Wishlist"
                      class="md-just-icon md-simple md-rose"
                    >
                      <i class="material-icons">favorite</i>
                    </md-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapGetters } from "vuex";
import { Tabs } from "@/components";
import axios from "axios";
export default {
  name: "product-details",
  bodyClass: "product-page",
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
      selectedSize: "Select size",
      selectedColor: "Select color",
      selectedQuantity: 1,
      activeSize: false,
      activeColor: false,
      product: null,
      sizes: [],
      rating: 0,
      colors: []
    };
  },
  methods: {
    ...mapMutations(["ADD_TO_CART"]),
    addToCart() {
      var product = {
        productId: this.product._id,
        selectedColor: this.selectedColor,
        selectedSize: this.selectedSize,
        selectedQuantity: this.selectedQuantity
      };
      console.log(this.$store.state.cart.length);
      for (let i = 0; i < this.$store.state.cart.length; i++) {
        if (product.productId._id === this.$store.state.cart[i].productId) {
          if (
            product.selectedColor === this.$store.state.cart[i].selectedColor &&
            product.selectedSize === this.$store.state.cart[i].selectedSize
          ) {
            console.log("same product"); //FIX THIS
            return;
          }
        }
      }
      this.ADD_TO_CART(product);
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
    window.addEventListener("resize", this.leafActive);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.leafActive);
  },
  async beforeMount() {
    let productId = window.location.pathname.slice(10);
    let { data } = await axios.get(
      `http://127.0.0.1:3000/api/products/${productId}`
    );
    data.availability.map(elem => {
      if (!this.colors.includes(elem.color)) {
        this.colors.push(elem.color);
      }
      if (!this.sizes.includes(elem.size)) {
        this.sizes.push(elem.size);
      }
    });
    this.product = data;
    this.rating = data.rating;
  },
  watch: {
    selectedSize: function() {
      this.colors = this.product.availability
        .filter(el => el.size === this.selectedSize)
        .map(elem => elem.color);
    },
    rating: function() {
      let productId = window.location.pathname.slice(10);
      axios.put(`http://127.0.0.1:3000/api/products/${productId}/rating`, {
        rating: this.rating
      });
    }
  }
};
</script>

<style>
.big {
  width: 100% !important;
}
#big {
  width: 100% !important;
  background-color: white !important;
  border: none !important;
  color: black;
  -webkit-box-shadow: none;
  box-shadow: none;
  border-bottom: 1px purple solid !important;
  text-transform: none;
}

#big .md-button-content {
  width: 100%;
  color: black;
  display: flex;
  justify-content: space-between;
  margin-left: 10px;
}

#big .md-button-content .md-icon {
  color: black !important;
  margin: 0px;
}
#big .md-ripple {
  padding: 12px 5px;
}

#big span {
  font-size: 1.2em;
}

.pick-size {
  margin-bottom: 20px;
}
</style>
