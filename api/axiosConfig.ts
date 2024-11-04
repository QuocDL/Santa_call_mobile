import AsyncStorage from "@react-native-async-storage/async-storage";
import axios, { AxiosInstance } from "axios";

const apiFunface: AxiosInstance = axios.create({
  baseURL: "https://api.funface.online",
  withCredentials: true,
  headers: {
    "Access-Control-Allow-Origin": ["*", "$http_origin"],
    "Access-Control-Allow-Headers": [
      "*",
      "DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Content-Range,Range",
    ],
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS, DELETE, PUT, PATCH",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Max-Age": 1728000,
    'Content-Type': 'application/json'
  },
});
const arrayApi = [apiFunface];
arrayApi.map((item) =>
  item.interceptors.request.use(
    async (config) => {
      const token = await AsyncStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      if (config.data instanceof FormData) {
        config.headers["Content-Type"] = "multipart/form-data";
      }
      return config;
    },
    (error) => Promise.reject(error)
  )
);

export { apiFunface };
