import images from "@/assets/images";
import ProviderContent from "@/components/_common/ProviderContent";
import TabBarMenu from "@/components/TabBarMenu";
import { Link } from "expo-router";
import React from "react";
import { ImageBackground, ScrollView, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import VideoTemplate from "../(pages)/Template/VideoTemplate";
import ProtectedProvider from "@/components/_common/ProtectedProvider";

export default function TemplateVideoScreen() {
  return (
    <ProviderContent
      backgroundImage={images.bgImage}
      enableScroll={true}
      classNameScroll="min-h-screen"
    >
      <ProtectedProvider>
        <TabBarMenu />
        <VideoTemplate />
      </ProtectedProvider>
    </ProviderContent>
  );
}
