import Vue from "vue";
import Router from "vue-router";
import Index from "./views/Index.vue";
import Example from "./views/Example.vue";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Profile from "./views/Profile.vue";
import MainNavbar from "./layout/MainNavbar.vue";
import MainFooter from "./layout/MainFooter.vue";
import ShoppingCart from "./views/ShoppingCart.vue";
import Register from "./views/Register.vue";
import ProductDetails from "./views/ProductDetails.vue";
import ProductList from "./views/ProductList.vue";
import Confirmation from "./views/Confirmation.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  // routes: [
  //   {
  //     path: "/",
  //     name: "index",
  //     components: { default: Index, header: MainNavbar, footer: MainFooter },
  //     props: {
  //       header: { colorOnScroll: 400 },
  //       footer: { backgroundColor: "black" }
  //     }
  //   },
  routes: [
    {
      path: "/",
      name: "index",
      components: { default: ProductList, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/men",
      name: "men",
      components: { default: ProductList, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/women",
      name: "women",
      components: { default: ProductList, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/shoppingCart",
      name: "shoppingCart",
      components: {
        default: ShoppingCart,
        header: MainNavbar,
        footer: MainFooter
      },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/products/:id",
      name: "productDetails",
      components: {
        default: ProductDetails,
        header: MainNavbar,
        footer: MainFooter
      },
      props: {
        header: { colorOnScroll: 100 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/products",
      name: "productList",
      components: {
        default: ProductList,
        header: MainNavbar,
        footer: MainFooter
      },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/example",
      name: "example",
      components: { default: Example, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/landing",
      name: "landing",
      components: { default: Landing, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/login",
      name: "login",
      components: { default: Login, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 }
      }
    },
    {
      path: "/register",
      name: "register",
      components: { default: Register, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 }
      }
    },
    {
      path: "/profile",
      name: "profile",
      components: { default: Profile, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/login/confirmation",
      name: "confirmation",
      components: {
        default: Confirmation,
        header: MainNavbar,
        footer: MainFooter
      },
      props: {
        header: { colorOnScroll: 400 }
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});

// router.beforeEach((to, from, next) => {
//   next(true);
//   return;
// });
export default router;
