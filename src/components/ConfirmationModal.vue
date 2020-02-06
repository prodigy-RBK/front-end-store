<template>
  <div class="md-layout">
    <div style="width: 100%; text-align: left; padding: 0px 20px;">
      <h5><b>Address:</b> {{ deliveryInfo.street1 }} {{ deliveryInfo.street2 }} - {{ deliveryInfo.zip }}</h5>
      <h5><b>City: </b>{{ deliveryInfo.city }}, {{ deliveryInfo.country }}</h5>
      <h5><b>Phone Number: </b>{{ deliveryInfo.phone_number }}</h5>
      <h5><b>Payment Method: </b>{{ deliveryInfo.payment_method }}</h5>
      <hr />
      <div class="table-responsive">
        <table class="table table-shopping" style="width: 95%">
          <thead>
            <tr>
              <th>Product</th>
              <th class="th-description">Color</th>
              <th class="th-description">Size</th>
              <th class="th-description">Price</th>
              <th class="th-description">Qty</th>
              <th class="th-description">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Short Pants</td>
              <td>
                Purple
              </td>
              <td>
                M
              </td>
              <td><small>&euro;</small>499</td>
              <td>2</td>
              <td><small>&euro;</small>998</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "confirmation-modal",
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
    paymentInfo: {
      card_number: Number,
      expiration: Date,
      ccv: Number
    }
  },
  data() {
    return {
      products: []
    };
  },
  methods: {
    test() {
      console.log("hi");
    }
  }
};
</script>

<style scoped>
.table-responsive th {
  font-size: 0.9em !important;
}
.table-responsive td {
  font-size: 1em !important;
}
</style>
