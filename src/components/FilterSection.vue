<template>
  <md-card class="card-refine md-card-plain md-card-header-rose">
    <md-card-content>
      <h4 class="card-title">
        Refine
        <md-button class="md-just-icon md-simple pull-right" rel="tooltip" title="" data-original-title="Reset Filter">
          <i class="material-icons">cached</i>
        </md-button>
      </h4>
      <!-- Section: Price Range part perfectly functionning-->
      <div id="accordion" role="tablist">
        <div class="card card-collapse" :class="accordionClass('isOpenOne')">
          <div class="card-header" role="tab" id="headingOne">
            <h5 class="mb-0">
              <a class="filter-header" @click="toggleAccordion('isOpenOne')">
                Price Range
                <i class="material-icons">keyboard_arrow_down</i>
              </a>
            </h5>
          </div>
          <div id="collapseOne" class="message-body">
            <slider v-model="sliders.rangeSlider" type="info" :connect="true"></slider>
            <div slot="sliderFooter" class="card-body card-refine">
              <span id="price-left" class="price-left pull-left" data-currency="€">{{ this.sliders.rangeSlider[0] }}</span>
              <span id="price-right" class="price-right pull-right" data-currency="€">{{ this.sliders.rangeSlider[1] }}</span>
            </div>
          </div>
        </div>
        <!-- Section: Brands filter -->
        <div class="card card-collapse" :class="accordionClass('isOpenTwo')">
          <div class="card-header" role="tab" id="headingTwo">
            <h5 class="mb-0">
              <a class="filter-header collapsed" @click="toggleAccordion('isOpenTwo')">
                Brands
                <i class="material-icons">keyboard_arrow_down</i>
              </a>
            </h5>
          </div>
          <div id="collapseTwo" class="message-body">
            <md-checkbox v-model="brands" value="field1">field1</md-checkbox>
            <md-checkbox v-model="brands" value="field2">field2</md-checkbox>
            <md-checkbox v-model="brands" value="field3">field3</md-checkbox>
            <md-checkbox v-model="brands" value="field4">field4</md-checkbox>
          </div>
        </div>
        <!-- Section: Category filter -->
        <div class="card card-collapse" :class="accordionClass('isOpenThree')">
          <div class="card-header" role="tab" id="headingThree">
            <h5 class="mb-0">
              <a class="filter-header collapsed" @click="toggleAccordion('isOpenThree')">
                Category
                <i class="material-icons">keyboard_arrow_down</i>
              </a>
            </h5>
          </div>
          <div id="collapseThree" class="message-body">
            <md-checkbox v-model="categories" value="field1">field1</md-checkbox>
            <md-checkbox v-model="categories" value="field2">field2</md-checkbox>
            <md-checkbox v-model="categories" value="field3">field3</md-checkbox>
            <md-checkbox v-model="categories" value="field4">field4</md-checkbox>
          </div>
        </div>
        <!-- Section: Tags filter -->
        <div class="card card-collapse" :class="accordionClass('isOpenFour')">
          <div class="card-header" role="tab" id="headingFour">
            <h5 class="mb-0">
              <a class="filter-header collapsed" @click="toggleAccordion('isOpenFour')">
                Tags
                <i class="material-icons">keyboard_arrow_down</i>
              </a>
            </h5>
          </div>
          <div id="collapseFour" class="message-body">
            <md-checkbox v-model="tags" value="field1">field1</md-checkbox>
            <md-checkbox v-model="tags" value="field2">field2</md-checkbox>
            <md-checkbox v-model="tags" value="field3">field3</md-checkbox>
            <md-checkbox v-model="tags" value="field4">field4</md-checkbox>
          </div>
        </div>
      </div>
    </md-card-content>
  </md-card>
</template>

<script>
import { Slider } from "@/components";
export default {
  name: "RegularCheckboxes",
  data: () => ({
    categories: [],
    tags: [],
    brands: [],
    sliders: {
      rangeSlider: [0, 100]
    },
    control: {
      isOpenOne: true,
      isOpenTwo: false,
      isOpenThree: false,
      isOpenFour: true
    }
  }),
  methods: {
    accordionClass: function(arg) {
      return {
        "is-closed": !this.control[arg],
        "is-primary": this.control[arg],
        "is-dark": !this.control[arg]
      };
    },
    toggleAccordion: function(arg) {
      this.control[arg] = !this.control[arg];
    }
  }
};
</script>

<style scoped>
.md-checkbox {
  display: flex;
}
.filter-header {
  cursor: pointer;
}
.message-body {
  padding: 0;
  max-height: 10em;
  overflow: hidden;
  transition: 0.3s ease all;
}
.is-closed .message-body {
  max-height: 0;
}
</style>
