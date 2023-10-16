import axios from "axios";

export default defineNuxtPlugin(() => {
  axios.defaults.baseURL = "http://localhost:3337/api";
  axios.defaults.withCredentials = false;

  return {
    provide: {
      axios,
    },
  };
});
