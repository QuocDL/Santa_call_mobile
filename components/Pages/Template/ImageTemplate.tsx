import images from "@/assets/images";
import SwapImageCard from "@/components/_common/ProductCard/SwapImageCard";
import Pagination from "@/components/_element/Pagination";
import { LinkType } from "@/interfaces/Helper";
import React, { memo } from "react";
import { FlatList, Text, View } from "react-native";

export const ImageTemplate = memo(() => {
  const imageLink = `https://img.freepik.com/premium-photo/new-year-party-air-balloons-confetti-green-background-woman-with-champagne-celebrate_136403-14437.jpg?w=1060`;

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
          <SwapImageCard image={images.welcome.secondImage} title="Name template" description="Download: 230" href={'/(protected)/swap/swap-image/2' as LinkType} />
        )}
      />
      <Pagination totalPage={50} onChangePage={() => console.log('ahihi')} />
    </View>
  );
})
