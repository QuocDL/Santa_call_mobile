import images from "@/assets/images";
import { TabBarMenu } from "@/components/_common/TabBarMenu";
import ProviderContent from "@/components/Provider/ProviderContent";
import React from "react";
import { VideoTemplate } from "../(pages)/Template/VideoTemplate";

export default function TemplateVideoScreen() {
  return (
    <ProviderContent
      backgroundImage={images.bgImage}
      viewScroll="none"
      classNameScroll="min-h-screen"
    >
      <TabBarMenu />
      <VideoTemplate/>
    </ProviderContent>
  );
}
