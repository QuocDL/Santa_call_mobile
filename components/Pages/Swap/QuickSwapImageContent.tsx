import AddphotoIcon from "@/assets/Icons/Addphoto";
import images from "@/assets/images";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import ChooseImageModal from "./_components/ChooseImageModal";
import useMediaPhone from "@/hooks/useMediaPhone";

export default function QuickSwapImageContent() {
  const { imageUri, showImagePickerOptions } = useMediaPhone();
  return (
    <>
      <View className="mt-2 flex flex-row items-center justify-between">
        <View>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() =>
              showImagePickerOptions({
                title: "Choose Image",
                describe: "Choose your image to swapface",
              })
            }
            className="w-[160px] h-[231px] flex flex-row justify-center items-center overflow-hidden bg-white rounded-md"
          >
            {imageUri ? (
              <Image
                source={{ uri: imageUri }}
                className="w-full h-full"
                resizeMode="cover"
              />
            ) : (
              <AddphotoIcon />
            )}
          </TouchableOpacity>
          <TextInput
            className="bg-white mt-2 h-[35px] rounded-md pl-2"
            placeholder="Enter file name..."
            placeholderTextColor={"#777777"}
          />
        </View>
        <View>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => null}
            className="w-[160px] relative h-[231px] flex flex-row justify-center items-center overflow-hidden bg-white rounded-md"
          >
            <ChooseImageModal classNameButton="bg-[#FF0000] absolute bottom-3 py-2 px-4 rounded-md">
                <Text className="text-white font-medium">Select</Text>
            </ChooseImageModal>
          </TouchableOpacity>
          <TouchableOpacity className="bg-[#FF0200] h-[35px] mt-2 rounded-md flex flex-row justify-center items-center">
            <AntDesign name="download" size={18} color="white" />
            <Text className="text-base text-white ml-2">Download</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="flex mt-6 flex-row justify-center items-center">
        <TouchableOpacity className="bg-[#FF0200] px-3 py-2 rounded-md">
          <Text className="text-white text-base font-medium">
            Swap    -1 <Image source={images.coinImage} />
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
