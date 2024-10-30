import React, { useEffect } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import BuyCoinModal from "./BuyCoinModal";
import NotificationIcon from "@/assets/Icons/Notification";
import SearchIcon from "@/assets/Icons/Search";
import images from "@/assets/images";
import { useFonts } from "expo-font";

export default function TabBarMenu({
  enableSearch = true,
}: {
  enableSearch?: boolean;
}) {
  return (
    <View className="flex gap-3.5 px-[4%]">
      <View className="flex flex-row justify-between items-center">
        <BuyCoinModal>
          <View className="bg-[#CF3736] py-1.5 px-2 rounded-md  border-[1px] border-white">
            <View className="flex flex-row items-center gap-2">
              <Text className="text-white font-extrabold text-lg">10</Text>
              <Image source={images.coinImage} />
              <Image source={images.increaseIcon} />
            </View>
          </View>
        </BuyCoinModal>
        <View className="py-1.5 px-2 bg-white rounded-full">
          <NotificationIcon />
        </View>
      </View>
      {enableSearch ? (
        <View className="flex flex-row items-center justify-between bg-white py-2.5 rounded-3xl">
          <TextInput
            className="pl-6 h-full w-[80%] overflow-hidden"
            placeholder="Search..."
            placeholderTextColor="#777777"
          />
          <TouchableOpacity className="mr-4">
            <SearchIcon />
          </TouchableOpacity>
        </View>
      ) : (
        <></>
      )}
    </View>
  );
}
