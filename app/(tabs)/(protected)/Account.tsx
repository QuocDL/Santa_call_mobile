import CameraIcon from "@/assets/Icons/Camera";
import images from "@/assets/images";
import ProviderContent from "@/components/Provider/ProviderContent";
import TabBarMenu from "@/components/TabBarMenu";
import { useMediaPhone } from "@/hooks/useMediaPhone";
import { logout } from "@/redux/slice/authSlice";
import { useAppDispatch } from "@/redux/store";
import { screenStyle } from "@/styles/ScreenWidth";
import Feather from "@expo/vector-icons/Feather";
import { Link, useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Shadow } from "react-native-shadow-2";
export default function Account() {
  const dispatch = useAppDispatch();
  const { imageUri, showImagePickerOptions } = useMediaPhone();
  const router = useRouter();
  const handleLogOut = () => {
    dispatch(logout());
    router.navigate("/(tabs)");
  };
  return (
    <ProviderContent
      backgroundImage={images.bgImage}
      viewScroll={"flatlist"}
      classNameScroll="min-h-screen"
    >
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
          <View className="bg-white px-4 py-16">
            {/* Log out button */}
            <View className="flex justify-center flex-row">
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => handleLogOut()}
                className="bg-[#FF0200] px-6 py-2 rounded-md flex flex-row items-center justify-center"
              >
                <Feather name="log-out" size={24} color="white" />
                <Text className="text-white font-bold ml-4">Log out</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ProviderContent>
  );
}
