import AddphotoIcon from "@/assets/Icons/Addphoto";
import images from "@/assets/images";
import { Videos } from "@/assets/Videos";
import SwapImageCard from "@/components/_common/ProductCard/SwapImageCard";
import SwapVideoCard from "@/components/_common/ProductCard/SwapVideoCard";
import VideoLoading from "@/components/_element/VideoLoading";
import ProviderContent from "@/components/Provider/ProviderContent";
import { useMediaPhone } from "@/hooks/useMediaPhone";
import { LinkType } from "@/interfaces/Helper";
import { AntDesign } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import {
  FlatList,
  Image,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function SwapVideo() {
  const { id } = useLocalSearchParams();
  const { imageUri, showImagePickerOptions } = useMediaPhone();
  return (
    <ProviderContent
      backgroundImage={images.bgImage}
      viewScroll="flatlist"
      classNameScroll={`min-h-screen ${Platform.OS === 'android' && 'mt-[15%]'}`}
      overflowBottom={{enable: true, height: 150}}
    >
      <View className="flex flex-col items-center">
        <Text className="text-white  text-lg mt-2 mb-4 font-bold">
          Name Template {id}
        </Text>
        <View>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() =>
              showImagePickerOptions({
                title: "Choose Image",
                describe: "Choose your image to swap video",
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
        <TouchableOpacity className="bg-[#FF0200] mt-4 w-[150px] flex flex-row justify-center items-center  rounded-md h-[35px]">
          <Text className="text-white text-lg font-medium">
            Swap -1
            <Image source={images.coinImage} />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-[#FF0200] w-[160px] h-[40px] mt-2 rounded-md flex flex-row justify-center items-center">
          <AntDesign name="download" size={18} color="white" />
          <Text className="text-base text-white ml-2">Download</Text>
        </TouchableOpacity>
      </View>
      <View className="px-[4%] mt-4 overflow-hidden">
        <View className="w-full h-[202px] rounded-md overflow-hidden bg-white">
          <VideoLoading source={Videos.trailerWelcome} />
        </View>
      </View>
      <View>
        <Text className="text-xl font-bold px-[4%] text-white mt-2">
          Propose
        </Text>
        <FlatList
          className="pl-[4%] mt-1 py-1.5"
          data={Array.from({ length: 5 })}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            gap: 15,
            paddingRight: 30,
          }}
          renderItem={() => (
            <SwapImageCard
              size="medium"
              href={"/(protected)/swap/swap-image/2" as LinkType}
            />
          )}
        />
        <FlatList
          className="pl-[4%] mt-1 py-1.5"
          data={Array.from({ length: 5 })}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            gap: 15,
            paddingRight: 30,
          }}
          renderItem={() => (
            <SwapVideoCard
              href={"/(protected)/swap/swap-video/2" as LinkType}
              videoSrouce={Videos.trailerWelcome}
            />
          )}
        />
      </View>
    </ProviderContent>
  );
}
