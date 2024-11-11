import { useQuery } from "@tanstack/react-query"
import * as Network from 'expo-network';
export const useGetIpAddress = ()=>{
   return useQuery({
      queryKey: ['GET_IP'],
      queryFn: async()=>{
         return await Network.getIpAddressAsync()
      }
   })
}