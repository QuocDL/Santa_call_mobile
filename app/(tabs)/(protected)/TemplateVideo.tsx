import images from "@/assets/images";
import ProviderContent from "@/components/Provider/ProviderContent";
import TabBarMenu from "@/components/_element/TabBarMenu";
import { Link } from "expo-router";
import React from "react";
import { ImageBackground, ScrollView, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import ProtectedProvider from "@/components/_common/ProtectedAuth";
import VideoTemplate from "@/app/(pages)/Template/VideoTemplate";

export default function TemplateVideoScreen() {
  return (
    <ProviderContent
      backgroundImage={images.bgImage}
      viewScroll="none"
      classNameScroll="min-h-screen"
    >
      <TabBarMenu />
      <VideoTemplate />
    </ProviderContent>
  );
}
