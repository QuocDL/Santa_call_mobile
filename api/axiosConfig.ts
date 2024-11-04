import AsyncStorage from "@react-native-async-storage/async-storage";
import axios, { AxiosInstance } from "axios";

const apiFunface: AxiosInstance = axios.create({
   baseURL: 'https://api.funface.online',
   withCredentials: true,
})

const arrayApi = [apiFunface]

arrayApi.map((item) => item.interceptors.request.use(
  async(config) => {
   const token = await AsyncStorage.getItem('token')
   if (token) {
      config.headers.Authorization = `Bearer ${token}`
   }
   return config
},
   (error) => Promise.reject(error)
))

export {apiFunface}