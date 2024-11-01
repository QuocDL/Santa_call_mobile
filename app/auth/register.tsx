import FaceBookIcon from "@/assets/Icons/Facebook";
import GoogleIcon from "@/assets/Icons/Google";
import LockIcon from "@/assets/Icons/Lock";
import MailIcon from "@/assets/Icons/Mail";
import images from "@/assets/images";
import KeyboardDismissWrapper from "@/components/_common/KeyboarDimiss";
import CheckBox from "@/components/_element/Checkbox";
import ProviderContent from "@/components/Provider/ProviderContent";
import { RegisterSchema, RegisterType } from "@/constants/validations/Auth";
import { useAppDispatch } from "@/redux/store";
import { screenStyle } from "@/styles/ScreenWidth";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useRouter } from "expo-router";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from "react-native";
import { Shadow } from "react-native-shadow-2";
export default function Register() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [acpTerm, setAcpTerm] = useState(false);
  const onchangeTermService = () => {
    setAcpTerm(!acpTerm);
  };
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterType>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      userName: "",
      email: "",
      password: "",
      confirmPassword: ""
    },
  });
  const inputRefs = React.useRef<{
    userName: TextInput | null;
    email: TextInput | null;
    password: TextInput | null;
    confirmPassword: TextInput | null
  }>({
    userName: null,
    email: null,
    password: null,
    confirmPassword: null
  });
  const focusNextField = (forcus: keyof typeof inputRefs.current) => {
    const nextField = inputRefs.current[forcus];
    const fields = Object.keys(inputRefs.current);
    const currentIndex = fields.indexOf(forcus);
    const isLastField = currentIndex === fields.length - 1;

    if (nextField) {
      nextField.focus();
    } else if (isLastField) {
      handleSubmit(onSubmit);
    }
  };
  const onSubmit = (data: RegisterType) => {
    console.log("Register data: ", data);
    router.replace('/auth/login')
  };
  return (
    <ProviderContent
      backgroundImage={images.bgImage}
      classNameScroll="min-h-screen "
      viewScroll={"none"}
    >
      <KeyboardDismissWrapper style={{ flex: 1 }}>
        <View>
          <View className={`mt-24 px-[4%] h-screen`}>
            <View className="form_data">
              <Controller
                control={control}
                name="userName"
                rules={{ required: true }}
                render={({ field: { onChange, onBlur, value } }) => {
                  return (
                    <View className="flex flex-row items-center rounded-md overflow-hidden bg-white h-[50px]">
                      <View className="bg-black h-full w-14 flex flex-row justify-center items-center">
                        <FontAwesome name="user" size={24} color="white" />
                      </View>
                      <TextInput
                        placeholder="Username"
                        className="px-4 h-full w-[80%]"
                        placeholderTextColor="#777777"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        returnKeyType="next"
                        onSubmitEditing={() =>
                          focusNextField("email")
                        }
                        ref={(ref) => (inputRefs.current.userName = ref)}
                        blurOnSubmit={false}
                        keyboardType="default"
                        autoCapitalize="none"
                      />
                    </View>
                  );
                }}
              />
              <View className="h-6">
                {errors.userName && (
                  <Text className="text-yellow-300" numberOfLines={2}>
                    {errors.userName.message as string}
                  </Text>
                )}
              </View>
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
                        placeholder="Email or username"
                        className="px-4 h-full w-[80%]"
                        placeholderTextColor="#777777"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        returnKeyType="next"
                        onSubmitEditing={() =>
                          focusNextField("password")
                        }
                        ref={(ref) => (inputRefs.current.email = ref)}
                        blurOnSubmit={false}
                        keyboardType="email-address"
                        autoCapitalize="none"
                      />
                    </View>
                  );
                }}
              />
              <View className="h-6">
                {errors.email && (
                  <Text className="text-yellow-300" numberOfLines={2}>
                    {errors.email.message as string}
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
                      keyboardType="default"
                      placeholder="Password"
                      placeholderTextColor="#777777"
                      secureTextEntry={!showPassword}
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      returnKeyType="next"
                      onSubmitEditing={() => focusNextField("confirmPassword")}
                      ref={(ref) => (inputRefs.current.password = ref)}
                      blurOnSubmit={false}
                    />
                    <TouchableWithoutFeedback
                      onPress={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <FontAwesome name="eye-slash" size={24} color="black" />
                      ) : (
                        <FontAwesome name="eye" size={24} color="black" />
                      )}
                    </TouchableWithoutFeedback>
                  </View>
                )}
              />
              <View className=" h-6">
                {errors.password && (
                  <Text className="text-yellow-300" numberOfLines={2}>
                    {errors.password.message as string}
                  </Text>
                )}
              </View>
              <Controller
                control={control}
                name="confirmPassword"
                rules={{ required: true }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <View className="flex  flex-row items-center rounded-md overflow-hidden bg-white h-[50px]">
                    <View className="bg-black h-full w-14 flex flex-row justify-center items-center">
                      <LockIcon />
                    </View>
                    <TextInput
                      className="px-4 h-full w-[70%]"
                      keyboardType="default"
                      placeholder="Confirm your password"
                      placeholderTextColor="#777777"
                      secureTextEntry={!showConfirmPassword}
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      returnKeyType="done"
                      onSubmitEditing={() => focusNextField("confirmPassword")}
                      ref={(ref) => (inputRefs.current.confirmPassword = ref)} // Lưu ref
                    />
                    <TouchableWithoutFeedback
                      onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? (
                        <FontAwesome name="eye-slash" size={24} color="black" />
                      ) : (
                        <FontAwesome name="eye" size={24} color="black" />
                      )}
                    </TouchableWithoutFeedback>
                  </View>
                )}
              />
              <View className=" h-4">
                {errors.confirmPassword && (
                  <Text className="text-yellow-300" numberOfLines={2}>
                    {errors.confirmPassword.message as string}
                  </Text>
                )}
              </View>
            </View>

            <View className="options_sign_in flex flex-row justify-between w-full my-2 px-1">
              <View className="flex flex-row items-end">
                <CheckBox onChange={onchangeTermService} checked={acpTerm} />
                <Text className="text-white ml-2">Accept terms and services</Text>
              </View>
             
            </View>
            <View className="sign_in_btn">
              <Shadow
                distance={10}
                startColor={"rgba(0, 0, 0, 0.15)"}
                offset={[0, 2]}
                containerStyle={{
                  borderRadius: 8,
                  width: "auto",
                }}
                style={screenStyle.full}
              >
                <TouchableOpacity
                  activeOpacity={0.6}
                  className={`h-[40px] w-full flex flex-row items-center justify-center rounded-md bg-[#FF0200]`}
                  onPress={handleSubmit(onSubmit)}
            
                >
                  <Text
                  className={`font-bold text-white text-lg`}
                  >
                    Sign up
                  </Text>
                </TouchableOpacity>
              </Shadow>
            </View>
            <View className="navigate_sign_up flex flex-row items-center mt-4 justify-center">
              <Text className=" text-lg text-center">
                You have an account?
              </Text>
              <Link
                href={"/auth/login"}
                className="text-lg font-medium text-white ml-2"
              >
                Sign in
              </Link>
            </View>
            <View className="social_media">
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
                className="bg-[#4776D0] h-[40px] w-full flex flex-row border-[1px] border-[#00403E] items-center mt-4 justify-center rounded-md "
              >
                <FaceBookIcon />
                <Text className="text-white font-medium text-base ml-3">
                  Sign in with Google
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardDismissWrapper>
    </ProviderContent>
  );
}
