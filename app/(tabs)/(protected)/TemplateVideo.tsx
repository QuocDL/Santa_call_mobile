import images from "@/assets/images";
import ProviderContent from "@/components/_common/ProviderContent";
import TabBarMenu from "@/components/TabBarMenu";
import { Link } from "expo-router";
import React from "react";
import { ImageBackground, ScrollView, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import ProtectedProvider from "@/components/_common/ProtectedProvider";
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