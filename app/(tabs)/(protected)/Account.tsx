import images from "@/assets/images";
import ProviderContent from "@/components/Provider/ProviderContent";
import TabBarMenu from "@/components/_element/TabBarMenu";
import CameraIcon from "@/assets/Icons/Camera";
import { useMediaPhone } from "@/hooks/useMediaPhone";
import { logout } from "@/redux/slice/authSlice";
import { useAppDispatch } from "@/redux/store";
import { screenStyle } from "@/styles/ScreenWidth";
import Feather from "@expo/vector-icons/Feather";
import { Link, useRouter } from "expo-router";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Shadow } from "react-native-shadow-2";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Foundation from "@expo/vector-icons/Foundation";
import { Control, Controller, useForm } from "react-hook-form";
import KeyboardDismissWrapper from "@/components/_common/KeyboarDimiss";
import { useRef, useState } from "react";

interface EditableFormProps {
  control: Control<any>;
}

interface EditableFields {
  [key: string]: boolean;
}
export default function Account() {
  const dispatch = useAppDispatch();
  const { imageUri, showImagePickerOptions } = useMediaPhone();
  const router = useRouter();
  const handleLogOut = () => {
    dispatch(logout());
    router.navigate("/(tabs)");
  };
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "Nguyen Van Binh",
      email: "Binh1234@gmail.com",
      birthday: "02/03/1999",
      phone: "0324567891",
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
  return (
    <ProviderContent
      backgroundImage={images.bgImage}
      viewScroll={"flatlist"}
      overflowBottom={{ enable: true, heigth: 30 }}
      showScrollBarY={false}
    >
      <KeyboardDismissWrapper style={{ flex: 1 }}>
        <TabBarMenu enableSearch={false} />
        <View className="px-[4%] mt-6">
          {/* box infomation user */}
          <View className="bg-[#FF0200] overflow-hidden  rounded-md ">
            <View className="flex justify-between shrink-0 flex-row items-center py-1.5 px-2">
              {/* Avatar user */}
              <TouchableOpacity
                onPress={() =>
                  showImagePickerOptions({
                    title: "Change Avatar",
                    describe:
                      "Would you like to take a new photo or select from the library?",
                  })
                }
                activeOpacity={0.7}
                className="relative rounded-full border-[1px] border-black"
              >
                <Image
                  className="rounded-full overflow-hidden"
                  source={images.SantaAvt}
                />
                <View className="bg-white absolute bottom-0 right-0 p-1 rounded-full border-[2px] border-black">
                  <CameraIcon />
                </View>
              </TouchableOpacity>
              {/* Product block */}
              <Shadow
                distance={8}
                startColor={"rgba(0, 0, 0, 0.10)"}
                offset={[0, 2]}
                containerStyle={{
                  borderRadius: 15,
                  width: "auto",
                }}
                style={screenStyle.full}
              >
                <View className="rounded-md overflow-hidden">
                  <Link
                    suppressHighlighting={false}
                    href={"/(tabs)"}
                    className="text-[#CF3736] text-lg font-bold bg-white  px-2 py-1.5 "
                  >
                    Products
                  </Link>
                </View>
              </Shadow>
            </View>
            {/* Infomation user */}
            <View className="bg-white px-4 py-2">
              {/* Profile infomation */}
              <View className="flex flex-col gap-y-2">
                <View className="flex flex-row items-center">
                  <View className="w-6 ">
                    <FontAwesome name="user" size={24} color="#FF0200" />
                  </View>
                  <Text className="font-medium text-base text-[#FF0200] ml-2">
                    Nguyen Van Binh
                  </Text>
                </View>
                <View className="flex flex-row items-center">
                  <View className="w-6 ">
                    <Foundation name="mail" size={24} color="#FF0200" />
                  </View>
                  <Text className="font-medium text-base text-[#FF0200] ml-2">
                    Binh1234@gmail.com
                  </Text>
                </View>
                <View className="flex flex-row items-center">
                  <View className="w-6 ">
                    <FontAwesome
                      name="birthday-cake"
                      size={22}
                      color="#FF0200"
                    />
                  </View>
                  <Text className="font-medium text-base text-[#FF0200] ml-2">
                    02/03/1999
                  </Text>
                </View>
                <View className="flex flex-row items-center">
                  <View className="w-6">
                    <FontAwesome name="phone" size={24} color="#FF0200" />
                  </View>
                  <Text className="font-medium text-base text-[#FF0200] ml-2">
                    0324567891
                  </Text>
                </View>
              </View>
              {/* Log out button */}
              <View className="flex justify-center flex-row mt-6 mb-4">
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => handleLogOut()}
                  className="bg-[#FF0200] px-6 py-2 rounded-md gap-x-2 flex flex-row items-center justify-center"
                >
                  <Feather name="log-out" size={24} color="white" />
                  <Text className="text-white font-bold ">Log out</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* Form Update Profile */}
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
                        <Text className="text-lg text-[#777777]">Name</Text>
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
                        <Text className="text-lg text-[#777777]">Name</Text>
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
                <View className="flex flex-row items-center">
                  <View className="w-6 ">
                    <Foundation name="mail" size={24} color="#FF0200" />
                  </View>
                  <Text className="font-medium text-base text-[#FF0200] ml-2">
                    Binh1234@gmail.com
                  </Text>
                </View>
                <View className="flex flex-row items-center">
                  <View className="w-6 ">
                    <FontAwesome
                      name="birthday-cake"
                      size={22}
                      color="#FF0200"
                    />
                  </View>
                  <Text className="font-medium text-base text-[#FF0200] ml-2">
                    02/03/1999
                  </Text>
                </View>
                <View className="flex flex-row items-center">
                  <View className="w-6">
                    <FontAwesome name="phone" size={24} color="#FF0200" />
                  </View>
                  <Text className="font-medium text-base text-[#FF0200] ml-2">
                    0324567891
                  </Text>
                </View>
              </View>
              {/* Log out button */}
              <View className="flex justify-end gap-x-2 flex-row mt-6 mb-4">
                <TouchableOpacity
                  activeOpacity={0.7}
                  className="bg-[#000000] px-6 py-1.5 rounded-md flex flex-row items-center justify-center"
                >
                  <Text className="text-white font-bold text-lg">Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.7}
                  className="bg-[#FF0200] px-6 py-1.5 rounded-md flex flex-row items-center justify-center"
                >
                  <Text className="text-white font-bold text-lg">Update</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </KeyboardDismissWrapper>
    </ProviderContent>
  );
}
