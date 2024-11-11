import { IProfileResponse } from '@/interfaces/User/User';
import { FontAwesome } from '@expo/vector-icons';
import React, { useEffect, useRef, useState } from 'react';
import { Control, Controller, useForm } from 'react-hook-form';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
interface EditableFormProps {
   control: Control<any>;
}
interface EditableFields {
   [key: string]: boolean;
}
const demoData = {
   username: "Nguyen Van Binh",
   email: "Binh1234@gmailß.com",
   birthday: "02/03/1999",
   phone: "0324567891",
}
export default function FormUpdateProfile({user}: {user: IProfileResponse}) {
   const {
      control,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm({
      defaultValues: {
         username: "",
         email: "",
         birthday: "",
         phone: "",
      },
   });
   const [editableFields, setEditableFields] = useState<EditableFields>({
      username: false,
      email: false,
      birthday: false,
      phone: false,
   });
   const inputRefs: { [key: string]: React.RefObject<TextInput> } = {
      username: useRef<TextInput>(null),
      email: useRef<TextInput>(null),
      birthday: useRef<TextInput>(null),
      phone: useRef<TextInput>(null),
   };
   const handleEditPress = (field: string) => {
      setEditableFields((prevState) => ({
         ...prevState,
         [field]: true,
      }));
      setTimeout(() => inputRefs[field]?.current?.focus(), 100);
   };
   const handleCheckPress = (field: string) => {
      setEditableFields((prevState) => ({
         ...prevState,
         [field]: false,
      }));
   };
   const handleCancelEdit = ()=>{
      reset(demoData)
   }
   const handleFinishEdit = (data: any)=>{
      console.log(data)
   }
   useEffect(()=>{
      handleCancelEdit()
      reset({
         email: user.email,
         username: user.user_name
      })
   },[demoData])
   return (
      <View className="bg-[#FF0200] overflow-hidden mt-4  rounded-md ">
         <View className="flex justify-between shrink-0 flex-row items-center py-1.5 px-2">
            <Text className="font-bold text-lg text-white">
               Update profile
            </Text>
         </View>
         <View className="bg-white px-4 py-2">
            {/* Update form */}
            <View>
               <Controller
                  control={control}
                  name="username"
                  rules={{ required: true }}
                  render={({ field: { onChange, onBlur, value } }) => {
                     return (
                        <View className="border-[1px] mt-2 border-black pb-2 py-1 pl-4 rounded-md flex flex-col relative">
                           <Text className="text-lg text-[#777777]">Name</Text>
                           <TextInput
                              ref={inputRefs.username}
                              placeholder="Username"
                              className="h-6  text-base text-black font-bold overflow-hidden"
                              placeholderTextColor="#777777"
                              onBlur={onBlur}
                              onChangeText={onChange}
                              editable={editableFields.username}
                              value={value}
                              returnKeyType="done"
                           />
                           <TouchableOpacity
                              className="mb-2 absolute -bottom-1 right-1"
                              onPress={() =>
                                 editableFields.username
                                    ? handleCheckPress("username")
                                    : handleEditPress("username")
                              }
                           >
                              {editableFields.username ? (
                                 <FontAwesome
                                    name="check-square-o"
                                    size={24}
                                    color="black"
                                 />
                              ) : (
                                 <FontAwesome name="edit" size={24} color="black" />
                              )}
                           </TouchableOpacity>
                        </View>
                     );
                  }}
               />
               <Controller
                  control={control}
                  name="email"
                  rules={{ required: true }}
                  render={({ field: { onChange, onBlur, value } }) => {
                     return (
                        <View className="border-[1px] border-black mt-2 pb-2 py-1 pl-4 rounded-md flex flex-col relative">
                           <Text className="text-lg text-[#777777]">Email</Text>
                           <TextInput
                              ref={inputRefs.email}
                              placeholder="Username"
                              className="h-6  text-base text-black font-bold overflow-hidden"
                              placeholderTextColor="#777777"
                              onBlur={onBlur}
                              onChangeText={onChange}
                              editable={editableFields.email}
                              value={value}
                              returnKeyType="done"
                           />
                           <TouchableOpacity
                              className="mb-2 absolute -bottom-1 right-1"
                              onPress={() =>
                                 editableFields.email
                                    ? handleCheckPress("email")
                                    : handleEditPress("email")
                              }
                           >
                              {editableFields.email ? (
                                 <FontAwesome
                                    name="check-square-o"
                                    size={24}
                                    color="black"
                                 />
                              ) : (
                                 <FontAwesome name="edit" size={24} color="black" />
                              )}
                           </TouchableOpacity>
                        </View>
                     );
                  }}
               />
               <Controller
                  control={control}
                  name="birthday"
                  rules={{ required: true }}
                  render={({ field: { onChange, onBlur, value } }) => {
                     return (
                        <View className="border-[1px] border-black mt-2 pb-2 py-1 pl-4 rounded-md flex flex-col relative">
                           <Text className="text-lg text-[#777777]">Birthday</Text>
                           <TextInput
                              ref={inputRefs.birthday}
                              placeholder="Username"
                              className="h-6  text-base text-black font-bold overflow-hidden"
                              placeholderTextColor="#777777"
                              onBlur={onBlur}
                              onChangeText={onChange}
                              editable={editableFields.birthday}
                              value={value}
                              returnKeyType="done"
                           />
                           <TouchableOpacity
                              className="mb-2 absolute -bottom-1 right-1"
                              onPress={() =>
                                 editableFields.birthday
                                    ? handleCheckPress("birthday")
                                    : handleEditPress("birthday")
                              }
                           >
                              {editableFields.birthday ? (
                                 <FontAwesome
                                    name="check-square-o"
                                    size={24}
                                    color="black"
                                 />
                              ) : (
                                 <FontAwesome name="edit" size={24} color="black" />
                              )}
                           </TouchableOpacity>
                        </View>
                     );
                  }}
               />
               <Controller
                  control={control}
                  name="phone"
                  rules={{ required: true }}
                  render={({ field: { onChange, onBlur, value } }) => {
                     return (
                        <View className="border-[1px] border-black mt-2 pb-2 py-1 pl-4 rounded-md flex flex-col relative">
                           <Text className="text-lg text-[#777777]">Number</Text>
                           <TextInput
                              ref={inputRefs.phone}
                              placeholder="Username"
                              className="h-6  text-base text-black font-bold overflow-hidden"
                              placeholderTextColor="#777777"
                              onBlur={onBlur}
                              onChangeText={onChange}
                              editable={editableFields.phone}
                              value={value}
                              returnKeyType="done"
                           />
                           <TouchableOpacity
                              className="mb-2 absolute -bottom-1 right-1"
                              onPress={() =>
                                 editableFields.phone
                                    ? handleCheckPress("phone")
                                    : handleEditPress("phone")
                              }
                           >
                              {editableFields.phone ? (
                                 <FontAwesome
                                    name="check-square-o"
                                    size={24}
                                    color="black"
                                 />
                              ) : (
                                 <FontAwesome name="edit" size={24} color="black" />
                              )}
                           </TouchableOpacity>
                        </View>
                     );
                  }}
               />

            </View>
            {/* Log out button */}
            <View className="flex justify-end gap-x-2 flex-row mt-8 mb-4">
               <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={handleCancelEdit}
                  className="bg-[#000000] px-6 py-1.5 rounded-md flex flex-row items-center justify-center"
               >
                  <Text className="text-white font-bold text-lg">Cancel</Text>
               </TouchableOpacity>
               <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={handleSubmit(handleFinishEdit)}
                  className="bg-[#FF0200] px-6 py-1.5 rounded-md flex flex-row items-center justify-center"
               >
                  <Text className="text-white font-bold text-lg">Update</Text>
               </TouchableOpacity>
            </View>
         </View>
      </View>
   )
}
