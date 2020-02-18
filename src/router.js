import Vue from "vue";
import Router from "vue-router";
import Login from "./views/Login.vue";
import ForgetPassword from "./views/ForgetPassword.vue";
import Forbidden from "./views/forbidden";
import ResetPassword from "./views/ResetPassword";

import Profile from "./views/Profile.vue";
import MainNavbar from "./layout/MainNavbar.vue";
import MainFooter from "./layout/MainFooter.vue";
import ShoppingCart from "./views/ShoppingCart.vue";
import Register from "./views/Register.vue";
import ProductDetails from "./views/ProductDetails.vue";
import ProductList from "./views/ProductList.vue";
import Confirmation from "./views/Confirmation.vue";
import auth from "./middleware/auth";
import verifyTokenUpdatePasswors from "./middleware/verifyTokenUpdatePasswors";

import store from "./store";
import Account from "./views/Account.vue";
import OrderDetails from "./views/OrderDetails.vue";
import Wishlist from "./views/Wishlist.vue";

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
      path: "/account",
      name: "account",
      components: {
        default: Account,
        header: MainNavbar,
        footer: MainFooter
      },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/account/:id",
      name: "orderDetails",
      components: {
        default: OrderDetails,
        header: MainNavbar,
        footer: MainFooter
      },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/wishlist",
      name: "wishlist",
      components: {
        default: Wishlist,
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
      },
      meta: {
        middleware: [auth]
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
    },
    {
      path: "/forgetPassword/:token",
      name: "forgetPassword",
      components: { default: ForgetPassword, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 }
      },
      meta: {
        middleware: [verifyTokenUpdatePasswors]
      }
    },
    {
      path: "/forbidden",
      name: "forbidden",
      components: { default: Forbidden, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 }
      }
    },
    {
      path: "/ResetPassword",
      name: "resetPassword",
      components: { default: ResetPassword, header: MainNavbar, footer: MainFooter },
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

router.beforeEach((to, from, next) => {
  if (!to.meta.middleware) {
    return next();
  }
  const middleware = to.meta.middleware;
  const context = {
    to,
    from,
    next,
    store
  };
  return middleware[0]({
    ...context
  });
});
export default router;
