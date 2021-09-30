import axios from "axios";
import { toast } from "react-toastify";
import { store } from "../store";
import loadingAction from "../store/loading/loading.action";

const http = axios.create({
  headers: {
    Authorization: "Bearer " + process.env.REACT_APP_API_TEMPLATES_TOKEN,
  },
});

http.interceptors.request.use(
  (config) => {
    store.dispatch(loadingAction.start());
    return config;
  },
  (error) => {
    toast.error(error.response.data.error);
    store.dispatch(loadingAction.complete());
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (resp) => {
    store.dispatch(loadingAction.complete());
    return resp;
  },
  (error) => {
    toast.error(error.response.data.error);
    store.dispatch(loadingAction.complete());
    return Promise.reject(error);
  }
);

export default http;
