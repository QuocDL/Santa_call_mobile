import { apiFunface } from "@/api/axiosConfig"
import { ICoinResponse } from "@/interfaces/Coin/Coin"

const PaymentServices = {
    async getCoin(userId: number){
        const data = await apiFunface.get<ICoinResponse>(`/get_coin_inapp/${userId}`)
        return data.data
    },
    async buyCoin(formData: FormData){
        const data = await apiFunface.post('/buy_coin_inapp', formData)
        return data.data
    }
}

export default PaymentServices