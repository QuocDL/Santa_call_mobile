import AuthServices from "@/services/Auth.services"
import { useQuery } from "@tanstack/react-query"

export const useGetProfile = (id: string | undefined)=>{
   return useQuery({
      queryKey: [`PROFILE_${id}`],
      queryFn: ()=>{
         return AuthServices.getProfile(id as string)
      },
      enabled: !!id
   })
}