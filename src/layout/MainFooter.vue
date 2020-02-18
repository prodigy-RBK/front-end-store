<template>
  <footer class="footer" :class="{ [`footer-${type}`]: type }" :data-background-color="backgroundColor">
    <div class="container" style="max-width:1600px;">
      <nav>
        <ul>
          <li>
            <a href="https://prodigy-store.onrender.com">
              Prodigy Store
            </a>
          </li>
          <li>
            <a href="https://dashboard-prodigy-store.onrender.com">
              Dashboard
            </a>
          </li>
          <li>
            <a href="https://github.com/prodigy-RBK/front-end-store">
              Github Repo
            </a>
          </li>
        </ul>
      </nav>
      <div class="copyright">
        &copy; {{ year }}, made with <md-icon>favorite</md-icon> by
        <a href="https://prodigy-store.onrender.com" target="_blank">Prodigy Store</a>
        for a better web.
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String
  },
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style scoped></style>
