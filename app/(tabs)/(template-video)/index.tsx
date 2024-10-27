import images from "@/assets/images";
import ProviderContent from "@/components/_common/ProviderContent";
import TabBarMenu from "@/components/TabBarMenu";
import { Link } from "expo-router";
import React from "react";
import { ImageBackground, ScrollView, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function index() {
  return (
    <ProviderContent backgroundImage={images.bgImage} enableScroll={true} classNameScroll="min-h-screen">
    <TabBarMenu/>
  </ProviderContent>
  );
}
