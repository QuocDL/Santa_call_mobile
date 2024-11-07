import images from "@/assets/images";
import { Videos } from "@/assets/Videos";
import SwapImageCard from "@/components/_common/ProductCard/SwapImageCard";
import SwapVideoCard from "@/components/_common/ProductCard/SwapVideoCard";
import Pagination from "@/components/_element/Pagination";
import { LinkType } from "@/interfaces/Helper";
import React, { memo } from "react";
import { FlatList, View } from "react-native";

export const VideoTemplate = memo(() => {
  return (
    <View className=" mt-2">
      <FlatList
      className="px-[4%]"
        data={Array.from({ length: 10 })}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        numColumns={2}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        columnWrapperStyle={{
          justifyContent: "center",
          gap: 10
        }}
        renderItem={() => (
          <SwapVideoCard href={'/(protected)/swap/swap-video/2' as LinkType} size="large" videoSrouce={Videos.trailerWelcome}/>
        )}
      />
      <Pagination totalPage={50} onChangePage={() => console.log('ahihi')} />
    </View>
  );
})
