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
          gap: 10,
        }}
        renderItem={() => (
          <SwapVideoCard
            href={"/(protected)/swap/swap-video/2" as LinkType}
            size="large"
            videoSrouce={
              "https://media.gettyimages.com/id/2174270448/video/atmosphere-paris-fashion-week-womenswear-spring-summer-2025.mp4?s=mp4-640x640-gi&k=20&c=S2irb3fMgGsVNib02dC7bqmPBYSLSYGGMl6as3UTu2k="
            }
          />
        )}
      />
      <Pagination totalPage={50} onChangePage={() => console.log("ahihi")} />
    </View>
  );
});
