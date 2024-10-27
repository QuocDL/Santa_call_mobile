import React, { useEffect } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import BuyCoinModal from "./_element/BuyCoinModal";
import NotificationIcon from "@/assets/Icons/Notification";
import SearchIcon from "@/assets/Icons/Search";
import images from "@/assets/images";
import { useFonts } from "expo-font";

export default function TabBarMenu() {
  return (
    <View className="flex gap-3 px-2">
      <View className="flex flex-row justify-between items-center">
        <BuyCoinModal>
          <View className="bg-[#CF3736] py-2 px-2 rounded-md  border-[1px] border-white">
            <View className="flex flex-row items-center gap-2">
              <Text  className="text-white font-extrabold text-lg">10</Text>
              <Image source={images.coinImage} />
              <Image source={images.increaseIcon} />
            </View>
          </View>
        </BuyCoinModal>
        <View className="p-1.5 bg-white rounded-full">
          <NotificationIcon />
        </View>
      </View>
      <View >
        <TextInput
          className="bg-white relative pl-6 pr-16 py-4 rounded-3xl"
          placeholder="Search..."
          placeholderTextColor="#777777"
        />
        <TouchableOpacity className="absolute right-4 top-5 -translate-y-3">
          <SearchIcon/>
        </TouchableOpacity>
      </View>
    </View>
  );
}
