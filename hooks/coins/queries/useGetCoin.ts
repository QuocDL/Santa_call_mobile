import PaymentServices from "@/services/Payment.services"
import { useQuery } from "@tanstack/react-query"

export const useGetCoin = (userId: number | undefined)=>{
    return useQuery({
        queryKey: [`GET_COIN_${userId}`],
        queryFn: ()=>{
            return PaymentServices.getCoin(userId ? userId : 0)
        },
        refetchOnMount: false,
        enabled: !!userId
    })
}