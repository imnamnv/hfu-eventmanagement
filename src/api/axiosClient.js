import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL;

const axiosClient = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});
// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    const { config, status, data } = error.response;

    if (
      (config.url === "/v1/authentication/login" ||
        config.url === "/v1/authentication/register") &&
      status === 403
    ) {
      const errorList = data.errors || [];
      const messageError = errorList[0]?.message;
      console.log("messageError: ", messageError);

      throw new Error(messageError);
    }
    return Promise.reject(error);
  }
);
export default axiosClient;
