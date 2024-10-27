import images from "@/assets/images";
import ProviderContent from "@/components/_common/ProviderContent";
import TabBarMenu from "@/components/TabBarMenu";
import React from "react";

export default function index() {
  return (
    <ProviderContent
      backgroundImage={images.bgImage}
      enableScroll={true}
      classNameScroll="min-h-screen"
    >
      <TabBarMenu />
    </ProviderContent>
  );
}
