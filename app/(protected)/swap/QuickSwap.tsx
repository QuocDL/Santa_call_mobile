import QuickSwapImageContent from "@/app/(pages)/Swap/QuickSwapImageContent";
import QuickSwapVideoContent from "@/app/(pages)/Swap/QuickSwapVideoContent";
import images from "@/assets/images";
import { Videos } from "@/assets/Videos";
import SwapImageCard from "@/components/_common/ProductCard/SwapImageCard";
import SwapVideoCard from "@/components/_common/ProductCard/SwapVideoCard";
import ProviderContent from "@/components/Provider/ProviderContent";
import { LinkType } from "@/interfaces/Helper";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { FlatList, Text, TouchableOpacity } from "react-native";
import { View } from "react-native";

export default function QuickSwap() {
  const [quickMode, setMode] = useState<"Image" | "Video">("Video");
  const handleChangeMode = () => {
    if (quickMode === "Image") {
      setMode("Video");
    } else {
      setMode("Image");
    }
  };
  return (
    <ProviderContent backgroundImage={images.bgImage} viewScroll="flatlist" overflowBottom={{enable: true, height: 150}} classNameScroll="min-h-screen">
      <View className="mt-4 px-[4%]">
        <View className="flex flex-row justify-center">
          <TouchableOpacity
            onPress={handleChangeMode}
            activeOpacity={0.8}
            className="bg-[#000000] py-2 px-3 rounded-md"
          >
            <Text className="text-white text-base font-bold">
              Swap {quickMode}
            </Text>
          </TouchableOpacity>
        </View>
        {quickMode === "Video" && <QuickSwapImageContent />}
        {quickMode === "Image" && <QuickSwapVideoContent />}
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
              href={"/(tabs)/TemplateVideo"}
              videoSrouce={Videos.trailerWelcome}
            />
          )}
        />
      </View>
    </ProviderContent>
  );
}
