import axios, { AxiosInstance } from "axios";

const apiFunface: AxiosInstance = axios.create({
   baseURL: 'https://api.funface.online',
   withCredentials: true,
})

const arrayApi = [apiFunface]

arrayApi.map((item) => item.interceptors.request.use(
   (config) => {
   const token = 'ahihi'
   if (token) {
      config.headers.Authorization = `Bearer ${token}`
   }
   return config
},
   (error) => Promise.reject(error)
))

export {apiFunface}