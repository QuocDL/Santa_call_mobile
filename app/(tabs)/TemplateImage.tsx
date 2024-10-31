import images from "@/assets/images";
import { TabBarMenu } from "@/components/_common/TabBarMenu";
import ProviderContent from "@/components/Provider/ProviderContent";
import React from "react";
import { ImageTemplate } from "../(pages)/Template/ImageTemplate";

export default function TemplateImageScreen() {
  return (
    <ProviderContent
      backgroundImage={images.bgImage}
      viewScroll={'flatlist'}
    >
        <TabBarMenu />
        <ImageTemplate/>
    </ProviderContent>
  );
}
