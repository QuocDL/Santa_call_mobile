import images from "@/assets/images";
import { Videos } from "@/assets/Videos";
import CategoryCard from "@/components/_common/ProductCard/CategoryCard";
import SeeImageCard from "@/components/_common/ProductCard/SeeImageCard";
import SeeVideoCard from "@/components/_common/ProductCard/SeeVideoCard";
import SwapImageCard from "@/components/_common/ProductCard/SwapImageCard";
import SwapVideoCard from "@/components/_common/ProductCard/SwapVideoCard";
import ViewUserModal from "@/components/_common/ViewUserModal";
import { useRouterProtected } from "@/hooks/Protected/useRouterProtected";
import { LinkType } from "@/interfaces/Helper";
import AntDesign from "@expo/vector-icons/AntDesign";
import React, { memo } from "react";
import { FlatList, Pressable, Text, View } from "react-native";

const demoNewUser = [
  { username: "Luis123", date: "24/10/2024" },
  { username: "Naruto", date: "22/10/2024" },
  { username: "kais098", date: "20/10/2024" },
  { username: "liaki111", date: "16/10/2024" },
  { username: "Lemon234", date: "14/10/2024" },
  { username: "Apple", date: "13/10/2024" },
];

const TemplateHomeComponent = () => {
  const router = useRouterProtected();
  return (
    <View className="mt-4">
      <View className="all_image_box px-[4%]">
        <Pressable
          onPress={() => router.navigate("/(tabs)/TemplateImage")}
          className="flex justify-between flex-row items-center"
        >
          <Text className="text-white font-bold text-xl">All Image </Text>
          <AntDesign name="right" size={24} color="white" />
        </Pressable>
        <View className="mt-2">
          <CategoryCard
            cardType="image"
            image={
              "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b0cfbcda-9b0e-465b-a1a1-63e2e7fb8614/dfxswli-99cbc544-2a93-4f19-891c-e3d7407a6e11.png/v1/fill/w_894,h_894,q_70,strp/ai_girl_or_real_photo__by_ameliaai_dfxswli-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2IwY2ZiY2RhLTliMGUtNDY1Yi1hMWExLTYzZTJlN2ZiODYxNFwvZGZ4c3dsaS05OWNiYzU0NC0yYTkzLTRmMTktODkxYy1lM2Q3NDA3YTZlMTEucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.hYt8-xtMALM5PbaXX8Gkv6sztx6jXFINd2SnJ3gPy4Q"
            }
            href={"/(tabs)/TemplateVideo"}
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
            video={'https://media.istockphoto.com/id/1272110108/vi/video/nh%C3%B3m-b%E1%BA%A1n-nh%E1%BA%A3y-ch%C3%A2u-%C3%A1-th%C6%B0%E1%BB%9Fng-th%E1%BB%A9c-b%E1%BB%AFa-ti%E1%BB%87c-%C4%91%C3%AAm.mp4?s=mp4-640x640-is&k=20&c=y7V3SoOU9xIp47ZB9kVFQNe_yz0SP1TyHGj_21k7wVg='}
            href={"/(tabs)/TemplateImage"}
            title="Happy new year videos"
          />
        </View>
      </View>

      {/* Latest swap image */}
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
          className="pl-[4%] mt-1 py-1.5"
          data={Array.from({ length: 5 })}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            gap: 15,
            paddingRight: 30,
          }}
          renderItem={() => (
            <SwapImageCard
              size="medium"
              href={"/(protected)/swap/swap-image/2" as LinkType}
              image={
                "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b0cfbcda-9b0e-465b-a1a1-63e2e7fb8614/dfxswli-99cbc544-2a93-4f19-891c-e3d7407a6e11.png/v1/fill/w_894,h_894,q_70,strp/ai_girl_or_real_photo__by_ameliaai_dfxswli-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2IwY2ZiY2RhLTliMGUtNDY1Yi1hMWExLTYzZTJlN2ZiODYxNFwvZGZ4c3dsaS05OWNiYzU0NC0yYTkzLTRmMTktODkxYy1lM2Q3NDA3YTZlMTEucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.hYt8-xtMALM5PbaXX8Gkv6sztx6jXFINd2SnJ3gPy4Q"
              }
            />
          )}
          ListFooterComponent={() => (
            <SeeImageCard seeMore={"/(tabs)/TemplateImage"} />
          )}
        />
      </View>

      {/* Latest swapped video */}
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
          className="pl-[4%] mt-1 py-1.5"
          data={Array.from({ length: 5 })}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            gap: 15,
            paddingRight: 30,
          }}
          renderItem={() => (
            <SwapVideoCard
              href={"/(protected)/swap/swap-video/2" as LinkType}
              videoSrouce={
                "https://media.istockphoto.com/id/1272110108/vi/video/nh%C3%B3m-b%E1%BA%A1n-nh%E1%BA%A3y-ch%C3%A2u-%C3%A1-th%C6%B0%E1%BB%9Fng-th%E1%BB%A9c-b%E1%BB%AFa-ti%E1%BB%87c-%C4%91%C3%AAm.mp4?s=mp4-640x640-is&k=20&c=y7V3SoOU9xIp47ZB9kVFQNe_yz0SP1TyHGj_21k7wVg="
              }
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
          <ViewUserModal>
            <View className="flex flex-row px-3 justify-between py-1.5">
              <Text className="text-[#FF0423] font-bold text-lg">New User</Text>
              <AntDesign name="right" size={24} color="#FF0423" />
            </View>
          </ViewUserModal>
          <View className="flex flex-row px-3 justify-between py-1.5">
            <View>
              <Text className="text-white">Login Name</Text>
            </View>
            <View className="flex flex-row justify-start w-[45%]">
              <Text className="text-white">Join Date</Text>
            </View>
          </View>
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
                    style={{ width: "45%" }}
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
};

export const TemplateHome = memo(TemplateHomeComponent);
