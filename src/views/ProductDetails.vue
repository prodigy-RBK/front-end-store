<template>
  <div class="wrapper">
    <div class="page-header header-filter" data-parallax="true" filter-color="rose" style="background-image: url('../assets/img/bg6.jpg');">
      <div class="container">
        <div class="row title-row">
          <div class="col-md-4 ml-auto">
            <md-button class="md-white float-right"><i class="material-icons">shopping_cart</i> 0 Items</md-button>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <div class="main main-raised main-product">
          <div class="row">
            <div class="col-md-6 col-sm-6">
              <div class="col-md-10 mr-auto ml-auto">
                <tabs :tab-images="['product1.jpg', 'product2.jpg', 'product3.jpg', 'product4.jpg']" plain nav-pills-images color-button="primary">
                  <!-- here you can add your content for tab-content -->
                  <template slot="tab-pane-1">
                    <img src="../assets/img/examples/product1.jpg" />
                  </template>
                  <template slot="tab-pane-2">
                    <img src="../assets/img/examples/product2.jpg" />
                  </template>
                  <template slot="tab-pane-3">
                    <img src="../assets/img/examples/product3.jpg" />
                  </template>
                  <template slot="tab-pane-4">
                    <img src="../assets/img/examples/product4.jpg" />
                  </template>
                </tabs>
              </div>
            </div>
            <div class="col-md-6 col-sm-6">
              <h2 class="title">Product title</h2>
              <h4>Brand name or logo</h4>
              <h3 class="main-price">$ Product price</h3>
              <h3 class="title">Description</h3>

              <md-card-content>
                Eres&apos; daring &apos;Grigri Fortune&apos; swimsuit has the fit and coverage of a bikini in a one-piece silhouette. This fuchsia style is
                crafted from the label&apos;s sculpting peau douce fabric and has flattering cutouts through the torso and back. Wear yours with mirrored
                sunglasses on vacation.
              </md-card-content>
              <div class="row pick-size">
                <div class="col-md-6 col-sm-6">
                  <div class="md-layout-item">
                    <div>
                      <md-menu md-size="big" class="big" md-align-trigger>
                        <md-button md-menu-trigger id="big"
                          ><span :style="[activeSize ? { color: 'black' } : { color: 'grey' }]">{{ selectedSize }}</span>
                          <md-icon>keyboard_arrow_down</md-icon></md-button
                        >
                        <md-menu-content>
                          <md-menu-item
                            @click="
                              activeSize = true;
                              selectedSize = 'Size1';
                            "
                            >Size 1</md-menu-item
                          >
                          <md-menu-item
                            @click="
                              activeSize = true;
                              selectedSize = 'Size2';
                            "
                            >Size 2</md-menu-item
                          >
                          <md-menu-item
                            @click="
                              activeSize = true;
                              selectedSize = 'Size3';
                            "
                            >Size 3</md-menu-item
                          >
                        </md-menu-content>
                      </md-menu>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-sm-6">
                  <div class="md-layout-item">
                    <div>
                      <md-menu md-size="big" class="big" md-align-trigger>
                        <md-button md-menu-trigger id="big"
                          ><span :style="[activeColor ? { color: 'black' } : { color: 'grey' }]">{{ selectedColor }}</span>
                          <md-icon>keyboard_arrow_down</md-icon></md-button
                        >
                        <md-menu-content>
                          <md-menu-item
                            @click="
                              activeColor = true;
                              selectedColor = 'Color1';
                            "
                            >Color 1</md-menu-item
                          >
                          <md-menu-item
                            @click="
                              activeColor = true;
                              selectedColor = 'Color2';
                            "
                            >Color 2</md-menu-item
                          >
                          <md-menu-item
                            @click="
                              activeColor = true;
                              selectedColor = 'Color3';
                            "
                            >Color 3</md-menu-item
                          >
                        </md-menu-content>
                      </md-menu>
                    </div>
                  </div>
                </div>
              </div>
              <div style="text-align-last: end;">
                <md-button @click="test" class="float-left md-rose md-round">Add to Cart &#xA0;<i class="material-icons">shopping_cart</i></md-button>
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
                  Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be
                  enough.
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
                  Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be
                  enough.
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
                  Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be
                  enough.
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
                    Dolce &amp; Gabbana's 'Greta' tote has been crafted in Italy from hard-wearing red textured-leather.
                  </div>
                </div>
                <div class="card-footer justify-content-between">
                  <div class="price">
                    <h4>$1,459</h4>
                  </div>
                  <div class="stats">
                    <md-button rel="tooltip" title="Saved to Wishlist" class="md-just-icon md-simple md-rose">
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
                    Balmain's mid-rise skinny jeans are cut with stretch to ensure they retain their second-skin fit but move comfortably.
                  </div>
                </div>
                <div class="card-footer justify-content-between">
                  <div class="price">
                    <h4>$459</h4>
                  </div>
                  <div class="stats">
                    <md-button rel="tooltip" title="Saved to Wishlist" class="md-just-icon md-simple md-simple">
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
                    Balenciaga's black textured-leather wallet is finished with the label's iconic 'Giant' studs. This is where you can...
                  </div>
                </div>
                <div class="card-footer justify-content-between">
                  <div class="price">
                    <h4>$590</h4>
                  </div>
                  <div class="stats">
                    <md-button rel="tooltip" title="Saved to Wishlist" class="md-just-icon md-simple md-rose">
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
                    Dolce &amp; Gabbana's 'Greta' tote has been crafted in Italy from hard-wearing red textured-leather.
                  </div>
                </div>
                <div class="card-footer justify-content-between">
                  <div class="price">
                    <h4>$1,459</h4>
                  </div>
                  <div class="stats">
                    <md-button rel="tooltip" title="Saved to Wishlist" class="md-just-icon md-simple md-rose">
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
import { Tabs } from "@/components";
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
      activeSize: false,
      activeColor: false
    };
  },
  methods: {
    test() {
      console.log(this.selectedSize);
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
