<template>
  <div class="md-layout" :paymentInfo="paymentInfo">
    <md-field class="md-form-group" slot="inputs">
      <md-icon>email</md-icon>
      <label>Credit Card Number...</label>
      <md-input v-model="paymentInfo.card_number" type="number" @keyup="$emit('update:deliveryInfo.card_number', paymentInfo.card_number)"></md-input>
    </md-field>
    <md-field class="md-form-group" slot="inputs">
      <md-icon>lock_outline</md-icon>
      <label>Expiration Date...</label>
      <md-input v-model="paymentInfo.expiration" type="month" @keyup="$emit('update:deliveryInfo.expiration', paymentInfo.expiration)"></md-input>
    </md-field>
    <md-field class="md-form-group" slot="inputs">
      <md-icon>email</md-icon>
      <label>CCV...</label>
      <md-input v-model="paymentInfo.ccv" type="number" @keyup="$emit('update:deliveryInfo.ccv', paymentInfo.ccv)"></md-input>
    </md-field>
  </div>
</template>

<script>
export default {
  name: "payment-info-modal",
  props: {
    paymentInfo: {
      card_number: Number,
      expiration: Date,
      ccv: Number
    }
  },
  methods: {
    test() {
      console.log("hi");
    }
  }
};
</script>

<style scoped></style>
