import { apiFunface } from "@/api/axiosConfig"

const AuthServices = {
   Login(body: FormData) {
      return apiFunface.post('/login', body)
   },
   Register(body: FormData) {
      return apiFunface.post('/register/user', body)
   },
   getProfile(id:string){
      return apiFunface.get(`/profile/${id}`)
   }
}

export default AuthServices