import images from "@/assets/images";
import ProviderContent from "@/components/_common/ProviderContent";
import TabBarMenu from "@/components/TabBarMenu";
import React from "react";

export default function TemplateImageScreen() {
  return (
    <ProviderContent
      backgroundImage={images.bgImage}
      viewScroll={'none'}
      classNameScroll="min-h-screen"
    >
        <TabBarMenu />
    </ProviderContent>
  );
}