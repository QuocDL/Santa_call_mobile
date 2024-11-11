import images from "@/assets/images";
import SwapImageCard from "@/components/_common/ProductCard/SwapImageCard";
import Pagination from "@/components/_element/Pagination";
import { LinkType } from "@/interfaces/Helper";
import React, { memo } from "react";
import { FlatList, Text, View } from "react-native";

export const ImageTemplate = memo(() => {
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
          <SwapImageCard image={'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b0cfbcda-9b0e-465b-a1a1-63e2e7fb8614/dfxswli-99cbc544-2a93-4f19-891c-e3d7407a6e11.png/v1/fill/w_894,h_894,q_70,strp/ai_girl_or_real_photo__by_ameliaai_dfxswli-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2IwY2ZiY2RhLTliMGUtNDY1Yi1hMWExLTYzZTJlN2ZiODYxNFwvZGZ4c3dsaS05OWNiYzU0NC0yYTkzLTRmMTktODkxYy1lM2Q3NDA3YTZlMTEucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.hYt8-xtMALM5PbaXX8Gkv6sztx6jXFINd2SnJ3gPy4Q'} title="Name template" description="Download: 230" href={'/(protected)/swap/swap-image/2' as LinkType} />
        )}
      />
      <Pagination totalPage={50} onChangePage={() => console.log('ahihi')} />
    </View>
  );
})
