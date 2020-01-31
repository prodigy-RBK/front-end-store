<template>
  <md-card class="md-card-tabs" :class="[{ 'flex-column': flexColumn }, { 'nav-pills-icons': navPillsImages }, { 'md-card-plain': plain }]">
    <md-card-header slot="header-title"> </md-card-header>

    <md-card-content>
      <transition name="fade" mode="out-in">
        <div class="tab-content">
          <div :class="getTabContent(index + 1)" v-for="(item, index) in tabImages" :key="item" v-if="isActivePanel(tabImages[index])">
            <slot :name="getTabContent(index + 1)">
              This is the default text!
            </slot>
          </div>
        </div>
      </transition>

      <md-list class="nav-tabs">
        <md-list-item
          v-for="(item, index) in tabImages"
          @click="switchPanel(tabImages[index])"
          :key="item"
          :class="[{ active: isActivePanel(tabImages[index]) }, { [getColorButton(colorButton)]: isActivePanel(tabImages[index]) }]"
        >
          <img class="img" :src="require('@/assets/img/examples/' + tabImages[index])" />
        </md-list-item>
      </md-list>
    </md-card-content>
  </md-card>
</template>

<script>
export default {
  props: {
    flexColumn: Boolean,
    navPillsImages: Boolean,
    plain: Boolean,
    tabImages: Array,
    colorButton: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      activePanel: this.tabImages[0]
    };
  },
  methods: {
    switchPanel(panel) {
      this.activePanel = panel;
    },
    isActivePanel(panel) {
      return this.activePanel == panel;
    },
    getColorButton: function(colorButton) {
      return "md-" + colorButton + "";
    },
    getTabContent: function(index) {
      return "tab-pane-" + index + "";
    }
  }
};
</script>

<style lang="css"></style>
