export default function auth({ next, store }) {
  if (!store.getters.auth.loggedIn) {
    return next({
      name: "login"
    });
  }
  if (!store.getters.auth.isActivated) {
    return next({
      name: "confirmation"
    });
  }
  return next();
}
