import images from "@/assets/images";
import ProviderContent from "@/components/_common/ProviderContent";
import TabBarMenu from "@/components/TabBarMenu";
import React from "react";
import { Text, View } from "react-native";

export default function login() {
  return (
    <ProviderContent
      backgroundImage={images.bgImage}
      classNameScroll="min-h-screen"
      enableScroll={true}
    >
      <View>
      </View>
    </ProviderContent>
  );
}
