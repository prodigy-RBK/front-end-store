<template>
  <div id="material-kit">
    <div :class="{ 'nav-open': NavbarStore.showNavbar }">
      <router-view name="header" />
      <div>
        <transition name="fade" mode="out-in">
          <router-view />
        </transition>
      </div>
      <router-view name="footer" />
    </div>
  </div>
</template>

<style>
@import "./template.css";
@import "./mainstyle.css";
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.15s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
