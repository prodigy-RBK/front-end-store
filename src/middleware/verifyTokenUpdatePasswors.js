import axios from "axios";
export default function verify({ next, store, to }) {
  axios
    .post(`http://localhost:3000/api/user/verifyEmailPassword/${to.params.token}`)
    .then(res => {
      console.log(res.data);
      return next();
    })
    .catch(err => {
      return next({
        name: "forbidden"
      });
    });
  return next();
}
