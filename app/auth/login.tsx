import images from "@/assets/images";
import ProviderContent from "@/components/_common/ProviderContent";
import React, { useRef } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import MailIcon from "@/assets/Icons/Mail";

export default function Login() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const passwordInputRef = useRef<TextInput>(null); // Reference to the password field

  const onSubmit = (data: any) => {
    console.log("Login data: ", data);
    // Handle login here (Call API, save token, navigate, etc.)
  };

  return (
    <ProviderContent
      backgroundImage={images.bgImage}
      classNameScroll="min-h-screen"
      enableScroll={false}
    >
      <View
        className={`${
          Platform.OS === "android" ? "mt-24" : "mt-16"
        } px-[4%] h-screen`}
      >
        <Controller
          control={control}
          rules={{ required: true }}
          name="email_or_username"
          render={({ field: { onChange, onBlur, value } }) => (
            <View className="flex flex-row items-center rounded-md overflow-hidden bg-white h-[50px]">
              <View className="bg-black h-full px-4 flex flex-row items-center">
                <MailIcon />
              </View>
              <TextInput
                placeholder="Email Or Username"
                className="px-4 h-full w-[80%]"
                placeholderTextColor={"#777777"}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                returnKeyType="next"
                onSubmitEditing={() => passwordInputRef.current?.focus()}
                blurOnSubmit={false}
              />
            </View>
          )}
        />

        <Controller
          control={control}
          rules={{ required: true }}
          name="password"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Password"
              secureTextEntry
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              ref={passwordInputRef}
              returnKeyType="done"
              onSubmitEditing={handleSubmit(onSubmit)}
            />
          )}
        />

        <TouchableOpacity
          activeOpacity={0.6}
          className="bg-[#FF0200] py-2 shadow-md flex rounded-md justify-center flex-row"
          onPress={handleSubmit(onSubmit)}
        >
          <Text className="text-white text-xl font-bold">Sign in</Text>
        </TouchableOpacity>
      </View>
    </ProviderContent>
  );
}
