import images from "@/assets/images";
import { Videos } from "@/assets/Videos";
import CategoryCard from "@/components/_common/ProductCard/CategoryCard";
import SeeImageCard from "@/components/_common/ProductCard/SeeImageCard";
import SeeVideoCard from "@/components/_common/ProductCard/SeeVideoCard";
import SwapImageCard from "@/components/_common/ProductCard/SwapImageCard";
import SwapVideoCard from "@/components/_common/ProductCard/SwapVideoCard";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";
import React from "react";
import { FlatList, Pressable, Text, View } from "react-native";

const demoNewUser = [
  {
    username: "Luis123",
    date: "24/10/2024",
  },
  {
    username: "Naruto",
    date: "22/10/2024",
  },
  {
    username: "kais098",
    date: "20/10/2024",
  },
  {
    username: "liaki111",
    date: "16/10/2024",
  },
  {
    username: "Lemon234",
    date: "14/10/2024",
  },
  {
    username: "Apple",
    date: "13/10/2024",
  },
];

export default function HomePage() {
  const router = useRouter();
  return (
    // All image box
    <View className=" mt-4 ">
      <View className="all_image_box px-[4%]">
        <Pressable
          onPress={() => router.navigate("/(tabs)/TemplateImage")}
          className="flex justify-between flex-row items-center"
        >
          <Text className="text-white font-bold text-xl">All Image</Text>
          <AntDesign name="right" size={24} color="white" />
        </Pressable>
        <View className="mt-2">
          <CategoryCard
            cardType="image"
            image={images.featuredImage}
            href={"/(tabs)/TemplateImage"}
            title="Happy new year photos"
          />
        </View>
      </View>
      {/* All video box */}
      <View className="all_video_box mt-4 px-[4%]">
        <Pressable
          onPress={() => router.navigate("/(tabs)/TemplateImage")}
          className="flex justify-between flex-row items-center"
        >
          <Text className="text-white font-bold text-xl">All Video</Text>
          <AntDesign name="right" size={24} color="white" />
        </Pressable>
        <View className="mt-2">
          <CategoryCard
            cardType="video"
            // image={Videos.imageThumb}
            video={Videos.trailerWelcome}
            href={"/(tabs)/TemplateImage"}
            title="Happy new year videos"
          />
        </View>
      </View>
      {/* Latest swapp image */}
      <View className="mt-4">
        <Pressable
          onPress={() => router.navigate("/(tabs)/TemplateImage")}
          className="flex px-[4%] justify-between flex-row items-center"
        >
          <Text className="text-white font-bold text-xl">
            Latest swapped image
          </Text>
          <AntDesign name="right" size={24} color="white" />
        </Pressable>
        <FlatList
          className="pl-[4%] mt-1  py-1.5"
          data={Array.from({ length: 5 })}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            gap: 15,
            paddingRight: 30,
          }}
          renderItem={(item) => (
            <SwapImageCard
              size="medium"
              href={"/(tabs)/(protected)/QuickSwap"}
            />
          )}
          ListFooterComponent={() => (
            <SeeImageCard seeMore={"/(tabs)/TemplateImage"} />
          )}
        />
      </View>
      {/* latest swapped video */}
      <View className="mt-4">
        <Pressable
          onPress={() => router.navigate("/(tabs)/TemplateImage")}
          className="flex px-[4%] justify-between flex-row items-center"
        >
          <Text className="text-white font-bold text-xl">
            Latest swapped video
          </Text>
          <AntDesign name="right" size={24} color="white" />
        </Pressable>
        <FlatList
          className="pl-[4%] mt-1  py-1.5"
          data={Array.from({ length: 5 })}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            gap: 15,
            paddingRight: 30,
          }}
          renderItem={(item) => (
            <SwapVideoCard
              href={"/(tabs)/TemplateVideo"}
              videoSrouce={Videos.trailerWelcome}
            />
          )}
          ListFooterComponent={() => (
            <SeeVideoCard seeMore={"/(tabs)/TemplateVideo"} />
          )}
        />
      </View>
      {/* New user */}
      <View className="px-[4%] mt-4">
        <View className="bg-black rounded-md overflow-hidden">
          {/* Table header */}
          <View className="flex flex-row px-3 justify-between py-1.5">
            <Text className="text-[#FF0423] font-bold text-lg">New User</Text>
            <AntDesign name="right" size={24} color="#FF0423" />
          </View>
          <View className="flex flex-row px-3 justify-between py-1.5">
            <View>
              <Text className="text-white">Login Name</Text>
            </View>
            <View className="flex flex-row justify-start w-[45%]">
              <Text className="text-white">Join Date</Text>
            </View>
          </View>
          {/* table body */}
          <View className="bg-white">
            <FlatList
              data={demoNewUser}
              keyExtractor={(item, index) => index.toString()}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => (
                <View
                  className="flex flex-row px-3 justify-between py-1.5"
                  style={{
                    backgroundColor: index % 2 === 0 ? "#A3A3A3" : "white",
                  }}
                >
                  <Text
                    className={`text-base font-medium ${
                      index === 0 ? "text-white" : "text-black"
                    }`}
                    numberOfLines={1} 
                    ellipsizeMode="tail" 
                    style={{ width: '45%' }}
                  >
                    {item.username}
                  </Text>
                  <View className="flex flex-row justify-start w-[45%]">
                    <Text
                      className={`text-base font-medium ${
                        index === 0 ? "text-white" : "text-black"
                      }`}
                    >
                      {item.date}
                    </Text>
                  </View>
                </View>
              )}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
