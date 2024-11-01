import { apiFunface } from "@/api/axiosConfig"

const AuthServices = {
   Login(body: FormData) {
      return apiFunface.post('/login', body)
   },
   Register(body: FormData) {
      return apiFunface.post('/register/user', body)
   }
}

export default AuthServices