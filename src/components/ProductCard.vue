<template>
  <div class="card card-product card-plain no-shadow" data-colored-shadow="false">
    <div class="card-header card-header-image">
      <a :href="'/products/' + product._id">
        <img :src="product.images[0]" alt="..." />
      </a>
    </div>
    <div class="card-body">
      <a :href="'/products/' + product._id">
        <h4 class="card-title">{{ product.title }}</h4>
      </a>
      <p class="description">{{ product.description }}</p>
    </div>
    <div class="card-footer justify-content-between">
      <div class="price-container">
        <span class="price">€ {{ product.price }}</span>
      </div>
      <md-button
        class="md-rose md-just-icon md-simple"
        @click="addToWishlist"
        v-show="!updatedInWishlist"
      >
        <md-icon>favorite</md-icon>
      </md-button>
      <md-button
        class="md-rose md-just-icon md-simple"
        @click="removeFromWishlist"
        v-show="updatedInWishlist"
      >
        <md-icon>favorite_border</md-icon>
      </md-button>
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