import { useToastController } from "@/hooks/useToastController"
import AuthServices from "@/services/Auth.services"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "expo-router"

export const useAuthRegister = ()=>{
   const router= useRouter()
   const {ToastController} = useToastController()
   return useMutation({
      mutationKey: ['Register'],
      mutationFn: (FormData: FormData)=>{
         return AuthServices.Register(FormData)
      },
      onSuccess: (data)=>{
         if(data.message === 'Account already exists!'){
            ToastController({
               type: 'warning',
               text: data.message,
               duration: 3000,
               placement: 'top'
            })
            return null
         }
         ToastController({
            type: 'success',
            text: 'Successfully registered',
            duration: 3000,
            placement: 'top'
         })
         router.replace('/auth/login')
      },
      onError: (err)=>{
         ToastController({
            type: 'warning',
            text: 'Error, try again!',
            duration: 3500,
            placement: 'top'
         })
      }
   })
}