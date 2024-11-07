import images from "@/assets/images";
import { TabBarMenu } from "@/components/_common/TabBarMenu";
import ProviderContent from "@/components/Provider/ProviderContent";
import React from "react";
import { VideoTemplate } from "../../components/(pages)/Template/VideoTemplate";

export default function TemplateVideoScreen() {
  return (
    <ProviderContent
      backgroundImage={images.bgImage}
      viewScroll="flatlist"
      overflowBottom={{enable: true, height: 50}}
    >
      <TabBarMenu />
      <VideoTemplate/>
    </ProviderContent>
  );
}
