import axios from "axios";

const $host = axios.create({
  baseURL: process.env.REACT_APP__API_URL,
});

const $authHost = axios.create({
  baseURL: process.env.REACT_APP__API_URL,
});
$authHost.defaults.headers.common[
  "Authorization"
] = `Bearer ${localStorage.getItem("token")}`;
// const autoInterceptor = (config) => {
//   config.headers.autorization = `Bearer ${localStorage.getItem("token")}`;
//   return config;
// };

// $authHost.interceptors.request.use(autoInterceptor);

export { $host, $authHost };
