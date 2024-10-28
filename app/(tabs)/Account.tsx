import images from "@/assets/images";
import ProtectedProvider from "@/components/_common/ProtectedProvider";
import ProviderContent from "@/components/_common/ProviderContent";
import TabBarMenu from "@/components/TabBarMenu";
import React from "react";
import { Text, View } from "react-native";

export default function Account() {
  return (
    <ProviderContent
      backgroundImage={images.bgImage}
      enableScroll={true}
      classNameScroll="min-h-screen"
    >
      <ProtectedProvider>
        <TabBarMenu />
      </ProtectedProvider>
    </ProviderContent>
  );
}
