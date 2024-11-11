import { useTypedSelector } from "@/redux/store"
import PaymentServices from "@/services/Payment.services"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const useBuyCoin = ()=>{
    const queryClient = useQueryClient()
    const userId = useTypedSelector(state=> state.auth.user?.id_user)
    return useMutation({
        mutationKey: ['BUY_COIN'],
        mutationFn: ()=>{
            const formData = new FormData()
            formData.append('coin_number', '100')
            formData.append('user_id', userId ? userId.toString() : '')
            return PaymentServices.buyCoin(formData)
        },
        onSuccess: ()=>{
            queryClient.invalidateQueries({
                queryKey: [`GET_COIN_${userId}`]
            })
        }
    })
}