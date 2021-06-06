import axiosClient from "./axiosClient";

const userAPI = {
  register(data) {
    const url = "/v1/authentication/register";
    return axiosClient.post(url, data);
  },
  login(data) {
    const url = "/v1/authentication/login";
    return axiosClient.post(url, data);
  },
};

export default userAPI;
