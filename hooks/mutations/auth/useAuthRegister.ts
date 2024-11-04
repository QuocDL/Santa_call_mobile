import { useToastController } from "@/hooks/useToastController"
import AuthServices from "@/services/Auth.servicces"
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
         if(data.data.message === 'Account already exists!'){
            ToastController({
               type: 'warning',
               text: data.data.message,
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
            text: 'Try again later',
            duration: 3500,
            placement: 'top'
         })
         console.log(err)
      }
   })
}