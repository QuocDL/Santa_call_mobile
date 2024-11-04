import images from "@/assets/images";
import ProviderContent from "@/components/Provider/ProviderContent";
import WelcomeContent from "@/components/_element/WelcomeContent";
import { Redirect, useRouter } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage"; 

export default function StartPage() {
  const [firstTry, setFirstTry] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true); // Trạng thái để theo dõi quá trình tải
  const [pageIndex, setPageIndex] = useState(0);
  const opacity = useRef(new Animated.Value(1)).current;
  const router = useRouter();

  useEffect(() => {
    const checkFirstTry = async () => {
      const storedValue = await AsyncStorage.getItem("firstTry");
      if (storedValue === null) {
        await AsyncStorage.setItem("firstTry", "true");
        setFirstTry(true);
      } else {
        setFirstTry(storedValue === "true");
      }
      setLoading(false); // Đặt loading thành false sau khi hoàn thành kiểm tra
    };

    checkFirstTry();
  }, []);

  useEffect(() => {
    setPageIndex(0);
  }, [firstTry]);

  const goToPageIndex = async (index: number) => {
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
      await AsyncStorage.setItem("firstTry", "false");
      router.navigate("/(tabs)");
    }
  };

  if (firstTry === false) {
    return <Redirect href={"/(tabs)"} />;
  }

  if (loading) {
    return null;
  }

  return (
    <ProviderContent backgroundImage={images.bgWelcome} viewScroll={"none"}>
      <View className={`mt-6 relative min-h-screen`}>
        <Animated.View style={{ opacity }}>
          <WelcomeContent indexContent={pageIndex} />
        </Animated.View>
        <View className="absolute bottom-[15%] w-full">
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
