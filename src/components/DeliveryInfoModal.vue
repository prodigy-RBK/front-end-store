<template>
  <div class="md-layout" :deliveryInfo="deliveryInfo">
    <md-field class="md-form-group" slot="inputs">
      <md-icon>email</md-icon>
      <label>Street 1...</label>
      <md-input v-model="deliveryInfo.street1" type="text" @keyup="$emit('update:deliveryInfo.street1', deliveryInfo.street1)"></md-input>
    </md-field>
    <md-field class="md-form-group" slot="inputs">
      <md-icon>lock_outline</md-icon>
      <label>Street 2...</label>
      <md-input v-model="deliveryInfo.street2" type="text" @keyup="$emit('update:deliveryInfo.street2', deliveryInfo.street2)"></md-input>
    </md-field>
    <md-field class="md-form-group" slot="inputs">
      <md-icon>email</md-icon>
      <label>City...</label>
      <md-input v-model="deliveryInfo.city" type="text" @keyup="$emit('update:deliveryInfo.city', deliveryInfo.city)"></md-input>
    </md-field>
    <md-field class="md-form-group" slot="inputs">
      <md-icon>lock_outline</md-icon>
      <label>Zip...</label>
      <md-input v-model="deliveryInfo.zip" type="number" @keyup="$emit('update:deliveryInfo.zip', deliveryInfo.zip)"></md-input>
    </md-field>
    <md-field class="md-form-group" slot="inputs">
      <md-icon>email</md-icon>
      <label>Country...</label>
      <md-input v-model="deliveryInfo.country" type="text" @keyup="$emit('update:deliveryInfo.country', deliveryInfo.country)"></md-input>
    </md-field>
    <md-field class="md-form-group" slot="inputs">
      <md-icon>lock_outline</md-icon>
      <label>Phone number...</label>
      <md-input v-model="deliveryInfo.phone_number" type="text" @keyup="$emit('update:deliveryInfo.phone_number', deliveryInfo.phone_number)"></md-input>
    </md-field>
    <md-field>
      <md-icon>lock_outline</md-icon>
      <label for="payment_method">Payment Method</label>
      <md-select
        v-model="deliveryInfo.payment_method"
        name="payment_method"
        id="payment_method"
        @md-selected="$emit('update:deliveryInfo.phone_number', deliveryInfo.phone_number)"
      >
        <md-option value="paypall">Paypall</md-option>
        <md-option value="cash_on_delivery">Cash On Delivery</md-option>
        <md-option value="credit_card">Credit Card</md-option>
      </md-select>
    </md-field>
  </div>
</template>
<script>
export default {
  name: "delivery-info-modal",
  props: {
    deliveryInfo: {
      street1: String,
      street2: String,
      city: String,
      zip: Number,
      country: String,
      phone_number: String,
      payment_method: String
    }
  },
  methods: {
    test() {
      console.log("hi");
    }
  }
};
</script>
