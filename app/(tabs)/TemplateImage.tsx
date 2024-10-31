import images from "@/assets/images";
import TabBarMenu from "@/components/_common/TabBarMenu";
import ProviderContent from "@/components/Provider/ProviderContent";
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
