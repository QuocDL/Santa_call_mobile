import images from "@/assets/images";
import ProviderContent from "@/components/_common/ProviderContent";
import WelcomeContent from "@/components/_element/WelcomeContent";
import { Redirect, useRouter } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function StartPage() {
  const firstTry = true;
  const [pageIndex, setPageIndex] = useState(0);
  const opacity = useRef(new Animated.Value(1)).current;
  const router = useRouter();
  const goToPageIndex = (index: number) => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setPageIndex(index);
      Animated.timing(opacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    });
    if (index === 3) {
      router.navigate("/(tabs)");
    }
  };

  return firstTry  ? (
    <Redirect href={"/(tabs)"} />
  ) : (
    <ProviderContent backgroundImage={images.bgWelcome} enableScroll={false}>
      <View className={`mt-6 relative min-h-screen`}>
        <Animated.View style={{ opacity }}>
          <WelcomeContent indexContent={pageIndex} />
        </Animated.View>
        <View className=" absolute bottom-[15%] w-full">
          <View className="flex flex-col justify-center items-center ">
            <TouchableOpacity
              onPress={() => goToPageIndex(pageIndex + 1)}
              className={`bg-white duration-300 py-1.5 px-6 rounded-md `}
            >
              <Text className="text-[#CF3736] font-bold text-xl">Continue</Text>
            </TouchableOpacity>
            <View className="flex flex-row gap-2 mt-2 justify-center items-center">
              {Array.from({ length: 3 }).map((_, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => goToPageIndex(index)}
                  className={`h-3 rounded-full duration-300 ${
                    pageIndex === index ? "bg-black w-5" : "bg-white w-3"
                  }`}
                />
              ))}
            </View>
          </View>
        </View>
      </View>
    </ProviderContent>
  );
}
