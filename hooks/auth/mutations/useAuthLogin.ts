import { useToastController } from "@/hooks/useToastController"
import { login } from "@/redux/slice/authSlice"
import { useAppDispatch } from "@/redux/store"
import AuthServices from "@/services/Auth.services"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useMutation } from "@tanstack/react-query"
import { router } from "expo-router"

export const useAuthLogin = ()=>{
   const {ToastController} = useToastController()
   const dispatch = useAppDispatch()
   return useMutation({
      mutationKey: ['LOGIN'],
      mutationFn: (Formdata: FormData)=>{
         return AuthServices.Login(Formdata)
      },
      onSuccess: async(data)=>{
         if(data.status !== 200){
            ToastController({
               type: 'warning',
               text: data.message,
               duration: 1500,
               placement: 'top'
            })
         }else if(data.status === 200){
            dispatch(login({
               email: data.email,
               user_name: data.user_name,
               device_register: data.device_register,
               id_user: data.id_user,
               ip_register: data.ip_register,
               link_avatar: data.link_avatar 
            }))
            await AsyncStorage.setItem('token', data.token)
            ToastController({
               type: 'success',
               text: data.message,
               duration: 2500,
               placement: 'top'
            })
            if(router.canGoBack()){
               router.back()
            }else{
               router.navigate('/(tabs)')
            }
         }
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