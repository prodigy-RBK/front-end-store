<template>
  <div
    class="card card-product card-plain no-shadow"
    data-colored-shadow="false"
    style="height: 100%"
  >
    <div class="card-header card-header-image">
      <router-link :to="'/products/' + product._id" exact>
        <img :src="product.images[0]" alt="..." />
      </router-link>
      <!-- <a :to="'/products/' + product._id">
        <img :src="product.images[0]" alt="..." />
      </a>-->
    </div>
    <div class="card-body">
      <router-link :to="'/products/' + product._id" exact>
        <h4 class="card-title">{{ product.title }}</h4>
      </router-link>
      <p class="description">{{ product.description }}</p>
    </div>
    <div class="card-footer justify-content-between myFooter">
      <div class="price-container">
        <span class="price">€ {{ product.price }}</span>
      </div>
      <div style="display: flex; width: 40px; place-content: space-evenly; ">
        <p
          style="font-size: 1rem; font-weight: 400; margin: 0"
        >{{ Math.round(product.rating * 2) / 2 }}</p>
        <star-rating
          v-model="product.rating"
          :show-rating="false"
          :max-rating="1"
          :increment="0.5"
          :star-size="20"
          :read-only="true"
        ></star-rating>
      </div>
      <div>
        <md-button
          class="md-rose md-just-icon md-simple"
          @click="addToWishlist"
          v-show="!updatedInWishlist"
        >
          <md-icon>favorite_border</md-icon>
        </md-button>
        <md-button
          class="md-rose md-just-icon md-simple"
          @click="removeFromWishlist"
          v-show="updatedInWishlist"
        >
          <md-icon>favorite</md-icon>
        </md-button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "product-card",
  props: {
    product: Object,
    inWishlist: Boolean
  },
  data() {
    return {
      updatedInWishlist: this.inWishlist
    };
  },
  methods: {
    async addToWishlist() {
      this.$store.dispatch("ADD_TO_WISHLIST", this.product._id);
      this.updatedInWishlist = true;
    },
    async removeFromWishlist() {
      this.$store.dispatch("REMOVE_FROM_WISHLIST", this.product._id);
      this.updatedInWishlist = false;
    }
  },
  beforeMount() {}
};
</script>
<style>
.myFooter {
  display: inline-flex !important;
  place-content: space-between !important;
  align-items: center !important;
  padding: 0px 10px !important;
  bottom: 0px !important;
  position: absolute !important;
  width: 100% !important;
}
</style>
