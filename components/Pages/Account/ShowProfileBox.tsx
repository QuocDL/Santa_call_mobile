import CameraIcon from "@/assets/Icons/Camera";
import images from "@/assets/images";
import { useRouterProtected } from "@/hooks/Protected/useRouterProtected";
import useMediaPhone from "@/hooks/useMediaPhone";
import { IProfileResponse } from "@/interfaces/User/User";
import { logout } from "@/redux/slice/authSlice";
import { useAppDispatch } from "@/redux/store";
import { screenStyle } from "@/styles/ScreenWidth";
import {
  Feather,
  FontAwesome,
  Foundation,
  MaterialIcons,
} from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Shadow } from "react-native-shadow-2";

export default function ShowProfileBox({ user }: { user: IProfileResponse }) {
  const { imageUri, showImagePickerOptions } = useMediaPhone();
  const dispatch = useAppDispatch();
  const router = useRouterProtected();
  const handleLogOut = () => {
    dispatch(logout());
    router.navigate("/(tabs)");
  };
  return (
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
          <View className="w-[90px] h-[90px] bg-white rounded-full">
            {imageUri ? (
              <Image
                className="rounded-full w-full h-full overflow-hidden"
                source={{ uri: imageUri }}
              />
            ) : (
              <Image
                className="rounded-full w-full h-full overflow-hidden"
                source={images.SantaAvt}
              />
            )}
          </View>
          <View className="bg-white absolute bottom-0 right-0 p-1 rounded-full border-[2px] border-black">
            <CameraIcon />
          </View>
        </TouchableOpacity>
        {/* Product block */}

        <TouchableOpacity
          onPress={() => router.navigate("/(protected)/products")}
          className="rounded-sm font-bold bg-white  px-4 mr-2 py-1.5 "
        >
          <Text className="font-semibold text-lg text-[#CF3736]">Products</Text>
        </TouchableOpacity>
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
              {user?.user_name}
            </Text>
          </View>
          <View className="flex flex-row items-center">
            <View className="w-6 ">
              <Foundation name="mail" size={24} color="#FF0200" />
            </View>
            <Text className="font-medium text-base text-[#FF0200] ml-2">
              {user?.email}
            </Text>
          </View>
          <View className="flex flex-row items-center">
            <View className="w-6 ">
              <MaterialIcons name="devices" size={22} color="#FF0200" />
            </View>
            <Text className="font-medium text-base text-[#FF0200] ml-2">
              {user?.device_register.replace("_", " ").replace("-", " ") ||
                "Unknown"}
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
  );
}
