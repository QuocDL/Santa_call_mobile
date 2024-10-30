import FaceBookIcon from "@/assets/Icons/Facebook";
import GoogleIcon from "@/assets/Icons/Google";
import { setModalClose } from "@/redux/slice/authSlice";
import { useAppDispatch, useTypedSelector } from "@/redux/store";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import AntDesign from '@expo/vector-icons/AntDesign';
import {
   Modal,
   StyleSheet,
   Text,
   TouchableOpacity,
   View
} from "react-native";
export default function AuthProtectedModal() {
   const modal = useTypedSelector(state => state.auth.modal)
   const router = useRouter()
   const dispatch = useAppDispatch()
   return (
      <>
         <Modal
            animationType="fade"
            transparent={true}
            visible={modal}
         // onRequestClose={() => {
         //    setModalVisible(!modalVisible);
         // }}
         >
            <View style={styles.overlay} pointerEvents="box-none">
               <TouchableOpacity
                  style={StyleSheet.absoluteFill}
                  activeOpacity={1}
               />
               <View className="bg-white overflow-hidden w-[95vw] rounded-md p-5 relative">
                  <TouchableOpacity activeOpacity={0.5} onPress={()=>{
                     dispatch(setModalClose())
                  }} className="absolute right-1 top-2">
                     <AntDesign name="close" size={24} color="black" />
                  </TouchableOpacity>
                  <Text className="text-lg mt-2 font-bold text-center">Please login to use this service!</Text>
                  <View className="mt-4">
                     <TouchableOpacity onPress={() => {
                        router.navigate('/auth/login')
                        dispatch(setModalClose())
                     }} className="bg-[#CF3736] py-1.5 rounded-md w-full">
                        <Text className="text-white font-bold text-lg text-center">Sign in</Text>
                     </TouchableOpacity>
                     <Text className="text-center my-1">Or</Text>
                     <TouchableOpacity
                        activeOpacity={0.6}
                        className="bg-white h-[40px] w-full flex flex-row border-[1px] border-[#00403E] items-center mt-4 justify-center rounded-md "
                     >
                        <GoogleIcon />
                        <Text className="text-black font-medium text-base ml-3">
                           Sign in with Google
                        </Text>
                     </TouchableOpacity>
                     <TouchableOpacity
                        activeOpacity={0.6}
                        className="bg-[#4776D0] h-[40px] w-full flex flex-row  items-center mt-2 justify-center rounded-md "
                     >
                        <FaceBookIcon />
                        <Text className="text-white font-medium text-base ml-3">
                           Sign in with Google
                        </Text>
                     </TouchableOpacity>
                  </View>
               </View>
            </View>
         </Modal>

      </>
   );
}
const styles = StyleSheet.create({
   overlay: {
      flex: 1,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      justifyContent: "center",
      alignItems: "center",
   },
});
