import { useToastController } from "@/hooks/useToastController"
import { login } from "@/redux/slice/authSlice"
import { useAppDispatch } from "@/redux/store"
import AuthServices from "@/services/Auth.servicces"
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
         if(data.data.status !== 200){
            ToastController({
               type: 'warning',
               text: data.data.message,
               duration: 1500,
               placement: 'top'
            })
         }else if(data.data.status === 200){
            dispatch(login({
               email: data.data.email,
               user_name: data.data.user_name,
               device_register: data.data.device_register,
               id_user: data.data.id_user,
               ip_register: data.data.ip_register,
               link_avatar: data.data.link_avatar 
            }))
            await AsyncStorage.setItem('token', data.data.token)
            ToastController({
               type: 'success',
               text: data.data.message,
               duration: 2500,
               placement: 'top'
            })
            if(router.canGoBack()){
               router.back()
            }else{
               router.navigate('/(tabs)')
            }
         }
      }
   })
}