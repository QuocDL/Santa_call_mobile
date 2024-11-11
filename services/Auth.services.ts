import { apiFunface } from "@/api/axiosConfig"
import { IProfileResponse, IResponseLogin } from "@/interfaces/User/User"
import { AxiosResponse } from "axios"

const AuthServices = {
   async Login(body: FormData) {
      const data = await apiFunface.post<FormData, AxiosResponse<IResponseLogin>>('/login', body)
      return data.data
   },
   async Register(body: FormData) {
      const data = await apiFunface.post('/register/user', body)
      return data.data
   },
   async ChangePassword (body: FormData, id_user: number){
      const data = await apiFunface.post<FormData, AxiosResponse<IResponseLogin>>(`/changepassword/${id_user}`, body)
      return data.data
   },
   async getProfile(id:number){
      const data = await apiFunface.get<IProfileResponse>(`/profile/${id}`)
      return data.data
   }
}

export default AuthServices