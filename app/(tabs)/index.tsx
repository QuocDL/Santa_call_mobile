import images from "@/assets/images";
import ProviderContent from "@/components/Provider/ProviderContent";
import TabBarMenu from "@/components/_common/TabBarMenu";
import { Link } from "expo-router";
import HomePage from "../(pages)/home/HomePage";
import { View } from "react-native";
export default function HomeScreen() {
  return (
    <ProviderContent backgroundImage={images.bgImage} viewScroll={'flatlist'} classNameScroll="min-h-screen">
      <TabBarMenu />
        <HomePage />
    </ProviderContent>
  );
}
