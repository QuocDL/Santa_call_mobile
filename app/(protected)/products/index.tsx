import images from "@/assets/images";
import ImageProfileCard from "@/components/_common/ProductCard/ProfileCard/ImageProfileCard";
import Pagination from "@/components/_element/Pagination";
import ProviderContent from "@/components/Provider/ProviderContent";
import { LinkType } from "@/interfaces/Helper";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { TextInput } from "react-native";
import { FlatList, Text, View } from "react-native";
import SearchIcon from "@/assets/Icons/Search";
import SwapVideoCard from "@/components/_common/ProductCard/SwapVideoCard";
import CategoryCard from "@/components/_common/ProductCard/CategoryCard";
import { Platform } from "react-native";
import ModalAlbumImage from "@/components/_common/AlbumModal/ImageAlbumModal";
import { demoImage } from "@/constants/DemoData";

export default function index() {
  const [showingAlbum, setAlbum] = useState<"image" | "video">("image");
  return (
    <ProviderContent
      enablePullToRefresh
      viewScroll="flatlist"
      classNameScroll={`min-h-screen ${
        Platform.OS === "android" && "mt-[15%]"
      }`}
      overflowBottom={{ enable: true, height: 150 }}
      backgroundImage={images.bgImage}
    >
      <View className="px-[2%] mt-4">
        <View className="bg-[#FF0000] pt-1.5 rounded-md overflow-hidden">
          <View className="px-2">
            <View className="flex flex-row items-center justify-between bg-white py-1.5 rounded-3xl">
              <TextInput
                className="pl-6 h-full w-[80%] overflow-hidden"
                placeholder="Search..."
                placeholderTextColor="#777777"
              />
              <TouchableOpacity className="mr-4">
                <SearchIcon />
              </TouchableOpacity>
            </View>
          </View>
          <View className="flex flex-row mt-3">
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setAlbum("image")}
              className={`w-[50%] py-2 h-full ${
                showingAlbum === "image" && "bg-white rounded-tr-md"
              }`}
            >
              <Text
                className={`text-center text-base ${
                  showingAlbum === "image" ? "text-[#FF0000]" : "text-white"
                } font-bold`}
              >
                All photo album
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setAlbum("video")}
              className={`w-[50%] py-2 h-full ${
                showingAlbum === "video" && "bg-white rounded-tl-md"
              }`}
            >
              <Text
                className={`text-center text-base ${
                  showingAlbum === "video" ? "text-[#FF0000]" : "text-white"
                } font-bold`}
              >
                All video album
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {showingAlbum === "image" && (
          <View className="px-[1%] mt-4">
            <FlatList
              data={demoImage}
              keyExtractor={(item, index) => index.toString()}
              showsHorizontalScrollIndicator={false}
              numColumns={2}
              ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
              columnWrapperStyle={{
                justifyContent: "center",
                gap: 10,
              }}
              renderItem={({ item, index }) => (
                <ModalAlbumImage id={index + 1}>
                  <ImageProfileCard
                    image={item}
                    date="Name template"
                    albumName="Download: 230"
                    href={"/(protected)/products" as LinkType}
                  />
                </ModalAlbumImage>
              )}
            />
            <Pagination
              totalPage={50}
              onChangePage={() => console.log("Paginate press")}
            />
          </View>
        )}
        {showingAlbum === "video" && (
          <View className="px-[1%] mt-2">
            {Array.from({ length: 3 }).map((_, index) => (
              <View className="mt-2">
                <CategoryCard
                  key={Math.random()}
                  cardType="video"
                  title="SwapVideo"
                  href={"/(protected)/swap/swap-video/2" as LinkType}
                  video={
                    "https://media.gettyimages.com/id/2174270448/video/atmosphere-paris-fashion-week-womenswear-spring-summer-2025.mp4?s=mp4-640x640-gi&k=20&c=S2irb3fMgGsVNib02dC7bqmPBYSLSYGGMl6as3UTu2k="
                  }
                />
              </View>
            ))}
            <Pagination
              totalPage={50}
              onChangePage={() => console.log("Paginate press")}
            />
          </View>
        )}
      </View>
    </ProviderContent>
  );
}
