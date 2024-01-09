import axios from "axios";
import { store } from "../../app/store";
import { change_err, change_token, change_loading } from "./UserSlicer";
const logInHandler = ({ email, password }) => {
  let config = {
    method: "post",
    url: "https://clinic-api.appssquare.com/api/admin/login",
    data: { email, password },
  };
  changeLoading();
  axios
    .request(config)
    .then((response) => {
      if (response.status === 200) {
        store.dispatch(change_token(response.data.token));
        store.dispatch(change_err(null));
      }
    })
    .catch((err) => {
      console.log(err);
      store.dispatch(change_err(err.response.data.message));
    })
    .finally(changeLoading);
};
const clearErr = () => {
  store.dispatch(change_err(null));
};
const changeLoading = () => {
  store.dispatch(change_loading());
};
const LogOut = () => {
  store.dispatch(change_token(null));
};
export { logInHandler, clearErr, LogOut };
