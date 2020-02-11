<template>
  <div class="md-layout" :deliveryInfo="deliveryInfo">
    <md-field class="md-form-group" :class="getValidationClass('street1')" slot="inputs">
      <md-icon>change</md-icon>
      <label for="street1">Street 1...</label>
      <md-input
        name="street1"
        id="street1"
        v-model="deliveryInfo.street1"
        type="text"
        @keyup="$emit('update:deliveryInfo.street1', deliveryInfo.street1)"
      ></md-input>
      <span class="md-error errorspan" v-if="!v.street1.required">Street line 1 is required</span>
    </md-field>
    <md-field class="md-form-group" slot="inputs">
      <md-icon>lock_outline</md-icon>
      <label for="street2">Street 2...</label>
      <md-input
        name="street2"
        id="street2"
        v-model="deliveryInfo.street2"
        type="text"
        @keyup="$emit('update:deliveryInfo.street2', deliveryInfo.street2)"
      ></md-input>
    </md-field>
    <md-field class="md-form-group" :class="getValidationClass('city')" slot="inputs">
      <md-icon>change</md-icon>
      <label for="city">City...</label>
      <md-input
        name="city"
        id="city"
        v-model="deliveryInfo.city"
        type="text"
        @keyup="$emit('update:deliveryInfo.city', deliveryInfo.city)"
      ></md-input>
      <span class="md-error errorspan" v-if="!v.city.required">City is required</span>
    </md-field>
    <md-field class="md-form-group" :class="getValidationClass('zip')" slot="inputs">
      <md-icon>lock_outline</md-icon>
      <label for="zip">Zip...</label>
      <md-input
        name="zip"
        id="zip"
        v-model="deliveryInfo.zip"
        type="number"
        @keyup="$emit('update:deliveryInfo.zip', deliveryInfo.zip)"
      ></md-input>
      <span class="md-error errorspan" v-if="!v.zip.required">Zip code is required</span>
    </md-field>
    <md-field class="md-form-group" :class="getValidationClass('country')" slot="inputs">
      <md-icon>change</md-icon>
      <label for="country">Country...</label>
      <md-input
        name="country"
        id="country"
        v-model="deliveryInfo.country"
        type="text"
        @keyup="$emit('update:deliveryInfo.country', deliveryInfo.country)"
      ></md-input>
      <span class="md-error errorspan" v-if="!v.country.required">Country is required</span>
    </md-field>
    <md-field class="md-form-group" :class="getValidationClass('phone_number')" slot="inputs">
      <md-icon>lock_outline</md-icon>
      <label for="phone_number">Phone number...</label>
      <md-input
        name="phone_number"
        id="phone_number"
        v-model="deliveryInfo.phone_number"
        type="number"
        @keyup="$emit('update:deliveryInfo.phone_number', deliveryInfo.phone_number)"
      ></md-input>
      <span class="md-error errorspan" v-if="!v.phone_number.required">Phone number is required</span>
    </md-field>
    <md-field :class="getValidationClass('payment_method')">
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
      <span class="md-error errorspan" v-if="!v.payment_method.required">Payment method is required</span>
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
    },
    v: {
      type: Object,
      required: true
    }
  },
  methods: {
    test() {},
    getValidationClass(fieldName) {
      const field = this.v[fieldName];

      if (field) {
        return {
          "md-invalid": field.$invalid && field.$dirty
        };
      }
    }
  },
  mounted() {}
};
</script>

<style>
.errorspan {
  margin-left: 40px;
}
</style>
