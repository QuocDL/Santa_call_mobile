import { apiFunface } from "@/api/axiosConfig"

const AuthServices = {
   async Login(body: FormData) {
      return await apiFunface.post('/login', body)
   },
   async Register(body: FormData) {
      return await apiFunface.post('/register/user', body)
   },
   async getProfile(id:string){
      return await apiFunface.get(`/profile/${id}`)
   }
}

export default AuthServices