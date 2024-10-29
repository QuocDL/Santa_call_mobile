import MailIcon from "@/assets/Icons/Mail";
import LockIcon from "@/assets/Icons/Lock";
import images from "@/assets/images";
import KeyboardDismissWrapper from "@/components/_common/KeyboarDimiss";
import ProviderContent from "@/components/_common/ProviderContent";
import CheckBox from "@/components/Checkbox";
import { screenStyle } from "@/styles/ScreenWidth";
import { LoginSchema, LoginType } from "@/constants/validations/Auth";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from "expo-router";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Shadow } from "react-native-shadow-2";
import GoogleIcon from '@/assets/Icons/Google'
import FaceBookIcon from '@/assets/Icons/Facebook'
export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [remember, setRemember] = useState(false)
  const onChangeRemember = () => {
    setRemember(!remember)
  }
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email_or_username: '',
      password: '',
    }
  });
  const inputRefs = React.useRef<{
    emailOrUsername: TextInput | null;
    password: TextInput | null;
  }>({
    emailOrUsername: null,
    password: null,
  });
  const focusNextField = (fieldName: keyof typeof inputRefs.current) => {
    if (fieldName === "emailOrUsername" && inputRefs.current.password) {
      inputRefs.current.password.focus();
    } else {
      handleSubmit(onSubmit)();
    }
  };
  const onSubmit = (data: LoginType) => {
    console.log("Login data: ", data);
  };
  return (
    <KeyboardDismissWrapper style={{ flex: 1 }}>
      <ProviderContent
        backgroundImage={images.bgImage}
        classNameScroll="min-h-screen "
        viewScroll={'none'}
      >
       <View>
       <View
          className={`mt-24 px-[4%]  h-screen`}
        >
          <View className="form_data">
            <Controller
              control={control}
              name="email_or_username"
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => {
                return (
                  (
                    <View className="flex flex-row items-center rounded-md overflow-hidden bg-white h-[50px]">
                      <View className="bg-black h-full w-14 flex flex-row justify-center items-center">
                        <MailIcon />
                      </View>
                      <TextInput
                        placeholder="Email Or Username"
                        className="px-4 h-full w-[80%]"
                        placeholderTextColor="#777777"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        returnKeyType="next"
                        onSubmitEditing={() => focusNextField("emailOrUsername")}
                        ref={(ref) => (inputRefs.current.emailOrUsername = ref)}
                        blurOnSubmit={false}
                        autoCapitalize="none"
                      />
                    </View>
                  )
                )
              }}
            />
            <View className="h-6">
              {errors.email_or_username && (
                <Text className="text-yellow-300" numberOfLines={2}>
                  {errors.email_or_username.message as string}
                </Text>
              )}
            </View>
            <Controller
              control={control}
              name="password"
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
                <View className="flex  flex-row items-center rounded-md overflow-hidden bg-white h-[50px]">
                  <View className="bg-black h-full w-14 flex flex-row justify-center items-center">
                    <LockIcon />
                  </View>
                  <TextInput
                    className="px-4 h-full w-[70%]"
                    placeholder="Password"
                    placeholderTextColor="#777777"
                    secureTextEntry={!showPassword}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    returnKeyType="done"
                    onSubmitEditing={() => focusNextField("password")} // Chuyển focus
                    ref={(ref) => (inputRefs.current.password = ref)} // Lưu ref
                    blurOnSubmit={false}
                  />
                  <TouchableWithoutFeedback onPress={() => setShowPassword(!showPassword)}>
                    {showPassword ? <FontAwesome name="eye-slash" size={24} color="black" /> : <FontAwesome name="eye" size={24} color="black" />}
                  </TouchableWithoutFeedback>
                </View>
              )}
            />
            <View className=" h-4">
              {errors.password && (
                <Text className="text-yellow-300" numberOfLines={2}>
                  {errors.password.message as string}
                </Text>
              )}
            </View>
          </View>

          <View className="options_sign_in flex flex-row justify-between w-full my-2 px-1">
            <View className="flex flex-row items-end">
              <CheckBox onChange={onChangeRemember} checked={remember} />
              <Text className="text-white ml-2">Remember Me</Text>
            </View>
            <Link href={'/(tabs)'} className="text-[#00B746] text-sm">Forgot your password?</Link>
          </View>
          <View className="sign_in_btn">
            <Shadow
              distance={10}
              startColor={'rgba(0, 0, 0, 0.15)'}
              offset={[0, 2]}
              containerStyle={{
                borderRadius: 8,
                width: 'auto'
              }}
              style={screenStyle.full}
            >
              <TouchableOpacity
                activeOpacity={0.6}
                className="bg-[#FF0200] h-[40px] w-full flex flex-row items-center justify-center rounded-md "
                onPress={handleSubmit(onSubmit)}
              >
                <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Sign in</Text>
              </TouchableOpacity>
            </Shadow>
          </View>
          <View className="navigate_sign_up flex flex-row items-center mt-4 justify-center">
            <Text className=" text-lg text-center">Don’t have an account?</Text>
            <Link href={'/(tabs)'} className="text-lg font-medium text-white ml-2">Sign up</Link>
          </View>
          <View className="social_media">
            <TouchableOpacity
              activeOpacity={0.6}
              className="bg-white h-[40px] w-full flex flex-row border-[1px] border-[#00403E] items-center mt-4 justify-center rounded-md "
            >
              <GoogleIcon />
              <Text className="text-black font-medium text-base ml-3">Sign in with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.6}
              className="bg-[#4776D0] h-[40px] w-full flex flex-row border-[1px] border-[#00403E] items-center mt-4 justify-center rounded-md "
            >
              <FaceBookIcon />
              <Text className="text-white font-medium text-base ml-3">Sign in with Google</Text>
            </TouchableOpacity>
          </View>
        </View>
       </View>
      </ProviderContent>
    </KeyboardDismissWrapper>
  );
}
