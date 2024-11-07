import images from "@/assets/images";
import { TabBarMenu } from "@/components/_common/TabBarMenu";
import ProviderContent from "@/components/Provider/ProviderContent";
import React from "react";
import { ImageTemplate } from "../../components/Pages/Template/ImageTemplate";

export default function TemplateImageScreen() {
  return (
    <ProviderContent
      backgroundImage={images.bgImage}
      viewScroll={'flatlist'}
      overflowBottom={{enable: true, height: 50}}
    >
        <TabBarMenu />
        <ImageTemplate/>
    </ProviderContent>
  );
}
