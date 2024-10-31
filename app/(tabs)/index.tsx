import images from "@/assets/images";
import { TabBarMenu } from "@/components/_common/TabBarMenu";
import ProviderContent from "@/components/Provider/ProviderContent";
import useTestActiveQuery from "@/hooks/query/useTestActiveQuery";
import React, { useEffect, useState } from "react";
import { TemplateHome } from "../(pages)/Home/TemplateHome";

export default function HomeScreen() {
  const {data, isFetching} = useTestActiveQuery()
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
