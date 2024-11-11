import images from "@/assets/images";
import { setPayOption } from "@/redux/slice/welcomeSlice";
import { useAppDispatch, useTypedSelector } from "@/redux/store";
import { AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router";
import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
const productIds = [
    'BABYWATCHMEGROWIOS.3usd10'
  ]
const itemCoin = [
  {
    image: images.checkGreen,
    title: "No ads",
  },
  {
    image: images.checkGreen,
    title: "No mask",
  },
  {
    image: images.checkGreen,
    title: "Only 1 coin",
  },
];

export default function PaymentContent() {
    const payOption = useTypedSelector(state => state.welcome.payOption)
    const dispatch = useAppDispatch()

    return (
    <>
      <View className="bg-white absolute top-0 left-4 p-2 rounded-full">
        <Link href={"/(tabs)"}>
          <AntDesign className="" name="close" size={24} color="#00403E" />
        </Link>
      </View>
      <View className="flex flex-col items-center justify-end mt-[30vh]">
        <View>
        <Text className="text-4xl text-center mr-4 font-bold text-white">
          100{" "}
          <Image
            source={images.coinImage}
            className="h-[24px] w-[24px] -translate-y-1"
          />{" "}
          = $3
        </Text>
        <View className=" flex flex-col items-center  ">
          <View>
            {itemCoin.map((item, index) => (
              <View key={index} className="flex flex-row gap-2 mt-4">
                <Image source={item.image} />
                <Text className="text-xl font-bold text-white">
                  {item.title}
                </Text>
              </View>
            ))}
          </View>
        </View>
        <TouchableOpacity
          className="bg-[#CF3736] relative px-6 rounded-md mt-14"
          activeOpacity={0.8}
          onPress={() => dispatch(setPayOption())}
        >
          <View className="flex flex-row gap-2 py-2 items-center">
            <Text className="text-white font-medium text-2xl">Payment $3</Text>
            <View
              className={`w-5 h-5 ${
                payOption ? "bg-green-500" : "bg-white"
              } border-2 border-white rounded-full`}
            ></View>
          </View>
        </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
