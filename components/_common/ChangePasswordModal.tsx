import FaceBookIcon from "@/assets/Icons/Facebook";
import GoogleIcon from "@/assets/Icons/Google";
import { setModalClose, setModalOpen } from "@/redux/slice/authSlice";
import { useAppDispatch, useTypedSelector } from "@/redux/store";
import { useRouter } from "expo-router";
import LockIcon from "@/assets/Icons/Lock";
import React, { useRef, useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Dimensions,
} from "react-native";
import { Controller, useForm } from "react-hook-form";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { useRouterProtected } from "@/hooks/ProtectedAuth/useRouterProtected";
import {
  ChangePasswordShema,
  ChangePasswordType,
} from "@/constants/validations/Auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useChangePassword } from "@/hooks/mutations/auth/useChangePassword";
import { useToastController } from "@/hooks/useToastController";

const screenHeight = Dimensions.get("window").height;

export default function ChangePasswordModal({
  children,
}: {
  children: React.ReactNode;
}) {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const isAuth = useTypedSelector((state) => state.auth.authenticate);
  const user = useTypedSelector((state) => state.auth.user);
  const [isOpen, setOpen] = useState<boolean>(false);
  const inputRefs: { [key: string]: React.RefObject<TextInput> } = {
    old_password: useRef<TextInput | null>(null),
    new_password: useRef<TextInput | null>(null),
    confirm_new_password: useRef<TextInput | null>(null),
  };
  const handleNextInput = (fieldName: string) => {
    if (inputRefs[fieldName]) {
      inputRefs[fieldName].current?.focus();
    }
  };
  const router = useRouterProtected();
  const dispatch = useAppDispatch();
  const { mutate } = useChangePassword();
  const handleOpenModal = () => {
    if (isAuth) {
      setOpen(true);
    }
    if (!isAuth) {
      dispatch(setModalClose());
    }
  };
  const handleCloseModal = ()=>{
    reset()
    setOpen(false)
  }
  const {
    handleSubmit,
    formState: { errors },
    control,
    reset
  } = useForm({
    resolver: zodResolver(ChangePasswordShema),
    defaultValues: {
      old_password: "",
      new_password: "",
      confirm_new_password: "",
    },
  });
  const { ToastController } = useToastController();
  const handleConfirmSubmit = (data: ChangePasswordType) => {
    setErrorMessage(null)
    const formdata = new FormData();
    formdata.append("old_password", data.old_password);
    formdata.append("new_password", data.new_password);
    mutate(
      {
        body: formdata,
        id_user: user ? user.id_user : "0",
      },
      {
        onSuccess: () => {
          setOpen(false);
          ToastController({
            text: "Change password successfull!",
            placement: "top",
            type: "success",
          });
        },
        onError: (err: any) => {
          const reponseMessage = err.response.data;
          if (reponseMessage) {
            setErrorMessage(reponseMessage.detail);
          }
        },
      }
    );
  };

  return (
    <>
      <TouchableOpacity onPress={handleOpenModal}>{children}</TouchableOpacity>
      <Modal animationType="fade" transparent={true} visible={isOpen}>
        <View style={styles.overlay} pointerEvents="box-none">
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
          >
            <ScrollView contentContainerStyle={styles.modalContainer}>
              <TouchableOpacity
                onPress={handleCloseModal}
                style={StyleSheet.absoluteFill}
                activeOpacity={1}
              />
              <View
                className="w-[95vw] relative p-5"
                style={[
                  styles.modalContent,
                  { maxHeight: screenHeight * 0.75 },
                ]}
              >
                <Text className="text-xl font-bold text-center text-[#CF3736]">
                  Change Password
                </Text>
                <TouchableOpacity
                  className="absolute top-2 right-2"
                  onPress={handleCloseModal}
                  hitSlop={10}
                >
                  <AntDesign name="close" size={24} color="black" />
                </TouchableOpacity>
                <View className="mt-4">
                  <Controller
                    control={control}
                    name="old_password"
                    rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <View className="flex flex-row items-center rounded-md overflow-hidden border-[1px] h-[50px]">
                        <View className="bg-black h-full w-14 flex flex-row justify-center items-center">
                          <LockIcon />
                        </View>
                        <TextInput
                          ref={inputRefs.old_password}
                          className="px-4 h-full w-[70%]"
                          keyboardType="default"
                          placeholder="Old password"
                          autoCapitalize="none"
                          placeholderTextColor="#777777"
                          onBlur={onBlur}
                          onChangeText={onChange}
                          value={value}
                          onFocus={()=> setErrorMessage(null)}
                          returnKeyType="next"
                          onSubmitEditing={() =>
                            handleNextInput("new_password")
                          }
                          blurOnSubmit={false}
                        />
                      </View>
                    )}
                  />

                  <View className="h-4 mb-1">
                    {errors.old_password && (
                      <Text className="text-xs text-yellow-500">
                        {errors.old_password.message}
                      </Text>
                    )}
                  </View>

                  <Controller
                    control={control}
                    name="new_password"
                    rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <View className="flex flex-row items-center rounded-md overflow-hidden border-[1px] h-[50px]">
                        <View className="bg-black h-full w-14 flex flex-row justify-center items-center">
                          <LockIcon />
                        </View>
                        <TextInput
                          ref={inputRefs.new_password}
                          onSubmitEditing={() =>
                            handleNextInput("confirm_new_password")
                          }
                          onFocus={()=> setErrorMessage(null)}
                          className="px-4 h-full w-[70%]"
                          keyboardType="default"
                          autoCapitalize="none"
                          placeholder="New password"
                          placeholderTextColor="#777777"
                          onBlur={onBlur}
                          onChangeText={onChange}
                          value={value}
                          returnKeyType="next"
                          blurOnSubmit={false}
                        />
                      </View>
                    )}
                  />
                  <View className="h-4 mb-1">
                    {errors.new_password && (
                      <Text className="text-xs text-yellow-500">
                        {errors.new_password.message}
                      </Text>
                    )}
                  </View>

                  <Controller
                    control={control}
                    name="confirm_new_password"
                    rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <View className="flex flex-row items-center rounded-md overflow-hidden border-[1px] h-[50px]">
                        <View className="bg-black h-full w-14 flex flex-row justify-center items-center">
                          <LockIcon />
                        </View>
                        <TextInput
                          ref={inputRefs.confirm_new_password}
                          className="px-4 h-full w-[70%]"
                          keyboardType="default"
                          autoCapitalize="none"
                          placeholder="Confirm password"
                          onFocus={()=> setErrorMessage(null)}
                          placeholderTextColor="#777777"
                          onBlur={onBlur}
                          onChangeText={onChange}
                          value={value}
                          returnKeyType="done"
                          onSubmitEditing={handleSubmit(handleConfirmSubmit)}
                          blurOnSubmit={true}
                        />
                      </View>
                    )}
                  />
                  <View className="h-4 mb-1">
                    {errors.confirm_new_password && (
                      <Text className="text-xs text-yellow-500">
                        {errors.confirm_new_password.message}
                      </Text>
                    )}
                    {errorMessage && (
                      <Text className="text-xs text-yellow-500">
                        {errorMessage}
                      </Text>
                    )}
                  </View>

                  <View className="w-full flex flex-row justify-end">
                    <TouchableOpacity
                      onPress={() => {
                        router.navigate("/auth/forgotPassword");
                        setOpen(false);
                      }}
                    >
                      <Text className="text-[#00B746]">
                        Forgot your password?
                      </Text>
                    </TouchableOpacity>
                  </View>

                  <View>
                    <TouchableOpacity
                      onPress={handleSubmit(handleConfirmSubmit)}
                      className="py-2 flex justify-center rounded-md mt-4 items-center w-full bg-[#FF0200]"
                    >
                      <Text className="text-white font-semibold text-lg">
                        Confirm
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
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
  modalContainer: {
    flexGrow: 1,
    justifyContent: "center",
    paddingBottom: 50,
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 10,
    alignSelf: "center",
    maxHeight: screenHeight * 0.75,
  },
});
