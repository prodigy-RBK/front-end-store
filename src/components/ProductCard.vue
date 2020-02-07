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
      <md-button class="md-rose md-just-icon md-simple" @click="addToWishlist" v-show="!inWishlist">
        <md-icon>favorite</md-icon>
      </md-button>
      <md-button
        class="md-rose md-just-icon md-simple"
        @click="removeFromWishlist"
        v-show="inWishlist"
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
    return {};
  },
  methods: {
    async addToWishlist() {
      let { data } = await axios.put(
        "http://127.0.0.1:3000/api/user/wishlist",
        { product: this.product._id }
      );
      this.inWishlist = true;
      await this.$store.commit("UPDATE_WISHLIST", data);
      this.$store.dispatch("UPDATE_USER_WISHLIST");
    },
    async removeFromWishlist() {
      let { data } = await axios.delete(
        "http://127.0.0.1:3000/api/user/wishlist",
        {
          data: {
            product: this.product._id
          }
        }
      );
      await this.$store.commit("UPDATE_WISHLIST", data);
      this.$store.dispatch("UPDATE_USER_WISHLIST");
      this.inWishlist = false;
    }
  },
  beforeMount() {}
};
</script>