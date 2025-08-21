import axios from "axios";
import { toast } from "react-toastify";
// https://abanaba-backend.onrender.com/api/v1
// http://localhost:4300

const APIs = axios.create({
  baseURL: "/api",
  headers: {
    // Accept: 'application/json',
    // Authorization: `Bearer ${localStorage.getItem('token') ?? ''}`,
  },
});

APIs.interceptors.request.use(function (config) {
  if (navigator.onLine) {
    config.headers.Accept = "application/json";

    config.headers.Authorization = `Bearer ${
      localStorage.getItem("token") ?? ""
    }`;

    return config;
  } else {
    toast("No internet connection", {
      toastId: "network error",
    });
  }
});

APIs.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    if (!err.response) {
      // Handle network error when response is not available
      toast("Network Error: Unable to reach the server.");
      return Promise.reject({
        message: "Network Error: Unable to reach the server.",
      });
    }
    throw err.response.data;
  }
);

export default APIs;
