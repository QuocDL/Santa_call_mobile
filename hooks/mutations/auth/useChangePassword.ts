import AuthServices from "@/services/Auth.services"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const useChangePassword = ()=>{
    const queryClient = useQueryClient()
    return useMutation({
        mutationKey: ['change_password'],
        mutationFn: ({body, id_user}: {body: FormData, id_user: string})=>{
            return AuthServices.ChangePassword(body, id_user)
        }
    })
}