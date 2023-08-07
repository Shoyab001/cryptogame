import axios from "axios";
import { toast } from "react-toastify";
const tokenKey = sessionStorage.getItem("token_key");
const customId = "custom-id-yes";
const InstanceAxios = axios.create({
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    tokenkey: tokenKey,
    "Content-Type": "application/json",
    "x-testing-platform": "web",
    "x-testing-version": "1.0.0",
    "accept-language": "en",
  },
});
const makeTheApiCall = (apiOptions) => {
  return new Promise((callback) => {
    InstanceAxios({
      method: apiOptions.method,
      url: apiOptions.url,
      data: apiOptions.data,
      params: apiOptions.params,
    })
      .then((response) => {
        if (response?.data?.statusCode == 500) {
          toast.error(response?.data?.message, {
            toastId: customId,
          });
          return;
        }
        if (response?.data?.success) {
          return callback({
            success: true,
            data: response?.data,
          });
        } else {
          return callback({
            success: false,
            data: response?.data,
          });
        }
      })

      .catch((err) => {
        if (err?.response?.status === 500 && err?.response?.data?.message) {
          return toast.error(err?.response?.data?.message, {
            toastId: customId,
          });
        }

        if (err?.code == "ERR_NETWORK") {
          return alert("No internet connection.");
        }
        if (err?.response?.status === 401) {
          localStorage.clear();
          toast.error("token has been expired");
          window.location.href = "/login";
        }
        if (
          err?.response?.status === 404 &&
          err.response.data.message === "USER_NOT_EXIST"
        ) {
          localStorage.clear();
          window.location.href = "/";
        }

        if (err?.response?.status === 404) {
          // toast.info("Page not exist");
        }
      });
  });
};

export default makeTheApiCall;
