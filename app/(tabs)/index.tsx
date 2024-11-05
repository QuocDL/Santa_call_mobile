import images from "@/assets/images";
import { TabBarMenu } from "@/components/_common/TabBarMenu";
import ProviderContent from "@/components/Provider/ProviderContent";
import React from "react";
import { TemplateHome } from "../(pages)/Home/TemplateHome";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <ProviderContent
      enablePullToRefresh
      backgroundImage={images.bgImage}
      viewScroll={"flatlist"}
      queryKey={['test']}
      overflowBottom={{ enable: true, height: 30 }}
    >
      <TabBarMenu />
      <TemplateHome/>
    </ProviderContent>
  );
}
