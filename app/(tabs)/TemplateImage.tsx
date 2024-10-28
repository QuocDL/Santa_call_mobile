import images from "@/assets/images";
import ProviderContent from "@/components/_common/ProviderContent";
import TabBarMenu from "@/components/TabBarMenu";
import React from "react";
import ImageTemplate from "../(pages)/Template/ImageTemplate";
import ProtectedProvider from "@/components/_common/ProtectedProvider";

export default function TemplateImageScreen() {
  return (
    <ProviderContent
      backgroundImage={images.bgImage}
      enableScroll={true}
      classNameScroll="min-h-screen"
    >
      <ProtectedProvider>
        <TabBarMenu />
        <ImageTemplate />
      </ProtectedProvider>
    </ProviderContent>
  );
}
