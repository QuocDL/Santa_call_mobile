import MailIcon from "@/assets/Icons/Mail"
import images from '@/assets/images'
import KeyboardDismissWrapper from "@/components/_element/KeyboarDimiss"
import ProviderContent from '@/components/Provider/ProviderContent'
import { ResetPasswordSchema, ResetPasswordType } from "@/constants/validations/Auth"
import { useToastController } from "@/hooks/useToastController"
import { zodResolver } from "@hookform/resolvers/zod"
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Keyboard, Text, TextInput, TouchableOpacity, View } from 'react-native'

export default function ForgotPassword() {
  const {ToastController} = useToastController()
  const { handleSubmit, formState: { errors }, control } = useForm<ResetPasswordType>({
    resolver: zodResolver(ResetPasswordSchema),
    defaultValues: {
      email: ''
    }
  })
  const onsubmit = (data: ResetPasswordType) => {
    Keyboard.dismiss()
    console.log('reset password', data)
    ToastController({
      text: 'Hello world',
      duration: 5000,
      type: 'success',
      placement: 'bottom',
    })
  }
  return (
    <ProviderContent viewScroll={"none"}
      backgroundImage={images.bgImage}>
      <KeyboardDismissWrapper style={{ flex: 1 }}>
        <View className='px-[4%] mt-8 h-screen'>
          <Text className='text-base text-white w-[90%] mb-8'>
            Enter your email account to reset your password
          </Text>
          <View className='mt-[16%] px-1'>
            <Controller
              control={control}
              name="email"
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => {
                return (
                  <View className="flex flex-row items-center rounded-md overflow-hidden bg-white h-[50px]">
                    <View className="bg-black h-full w-14 flex flex-row justify-center items-center">
                      <MailIcon />
                    </View>
                    <TextInput
                      placeholder="Email"
                      className="px-4 h-full w-[80%]"
                      placeholderTextColor="#777777"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      returnKeyType="done"
                      blurOnSubmit={false}
                      onSubmitEditing={()=> handleSubmit(onsubmit)}
                      keyboardType="email-address"
                      autoCapitalize="none"
                    />
                  </View>

                );
              }}
            />
            <View className=" h-4">
              {errors.email && (
                <Text className="text-yellow-300" numberOfLines={2}>
                  {errors.email.message as string}
                </Text>
              )}
            </View>
            <TouchableOpacity
              onPress={handleSubmit(onsubmit)}
              activeOpacity={0.6}
              className={`h-[40px] mt-[16%] w-full flex flex-row items-center justify-center rounded-md bg-[#FF0200]`}

            >
              <Text
                className={`font-bold text-white text-lg`}
              >
                Confirm email
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardDismissWrapper>
    </ProviderContent>
  )
}
