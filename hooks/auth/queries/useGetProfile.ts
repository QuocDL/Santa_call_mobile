import AuthServices from "@/services/Auth.services"
import { useQuery } from "@tanstack/react-query"

export const useGetProfile = (id: number | undefined)=>{
   return useQuery({
      queryKey: [`PROFILE_${id}`],
      queryFn: ()=>{
         return AuthServices.getProfile(id as number)
      },
      enabled: !!id
   })
}