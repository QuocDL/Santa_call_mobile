import NextIcon from "@/assets/Icons/NextIcon";
import PrevIcon from "@/assets/Icons/PrevIcon";
import images from "@/assets/images";
import { Videos } from "@/assets/Videos";
import AntDesign from "@expo/vector-icons/AntDesign";
import { ResizeMode, Video } from "expo-av";
import { Link } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Animated,
  FlatList,
  Image,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";

const flatList = [
  {
    image: images.welcome.firstImage,
    child: images.welcome.childFirstImage,
  },
  {
    image: images.welcome.secondImage,
    child: images.welcome.childSecondImage,
  },
];
const itemCoin = [
  {
    image: images.checkGreen,
    title: "No ads",
  },
  {
    image: images.checkGreen,
    title: "No mask",
  },
  {
    image: images.checkGreen,
    title: "Only 1 coin",
  },
];
export default function WelcomeContent({
  indexContent,
}: {
  indexContent: number;
}) {
  const [loading, setLoading] = useState(true);
  const flatListRef = useRef<FlatList>(null);
  const avatarListRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const opacity = useRef(new Animated.Value(0)).current;
  const handleLoad = () => {
    setLoading(false);
    // Khởi động animation opacity
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  };

  const onViewableItemsChanged = ({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      const index = flatList.findIndex(
        (item) => item.image === viewableItems[0].item.image
      );
      setCurrentIndex(index);
      avatarListRef.current?.scrollToIndex({
        index,
        animated: true,
        viewPosition: 0.5,
      });
    }
  };

  const onViewChildItemsChanged = ({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      const index = flatList.findIndex(
        (item) => item.image === viewableItems[0].item.image
      );
      setCurrentIndex(index);
      flatListRef.current?.scrollToIndex({
        index,
        animated: true,
        viewPosition: 0.5,
      });
    }
  };

  const scrollToIndex = async (index: number) => {
    setCurrentIndex(index);
    await Promise.all([
      flatListRef.current?.scrollToIndex({
        index: index,
        animated: true,
        viewPosition: 0.5,
      }),
      avatarListRef.current?.scrollToIndex({
        index: index,
        animated: true,
        viewPosition: 0.5,
      }),
    ]);
  };

  useEffect(() => {
    opacity.setValue(0);
    setLoading(true);
  }, [indexContent]);

  return (
    <>
      {indexContent === 0 && (
        <View className="flex flex-col items-center gap-3">
          <FlatList
            data={flatList}
            keyExtractor={(item) => item.image.toString()} // Ensure unique keys
            horizontal
            ref={flatListRef}
            showsHorizontalScrollIndicator={false}
            style={{
              paddingRight: 40,
            }}
            pagingEnabled
            contentContainerStyle={{
              paddingRight: 20,
            }}
            onViewableItemsChanged={onViewableItemsChanged}
            viewabilityConfig={viewabilityConfig}
            className="pl-2"
            renderItem={({ item }) => (
              <Image className="h-[370px]" source={item.image} />
            )}
          />

          <View className="flex flex-row justify-center ">
            <View className="flex flex-row gap-2 justify-center  w-full items-center">
              <TouchableOpacity
                onPress={() => {
                  if (currentIndex > 0) {
                    scrollToIndex(currentIndex - 1);
                  }
                }}
                className={`bg-[#777777] bg-opacity-5 h-10 justify-center rounded-full w-10 flex items-center ${
                  currentIndex === 0 ? "opacity-50" : ""
                }`}
                disabled={currentIndex === 0}
              >
                <PrevIcon />
              </TouchableOpacity>

              <View className="w-[138px] rounded-full overflow-hidden">
                <FlatList
                  data={flatList}
                  ref={avatarListRef}
                  horizontal
                  pagingEnabled
                  showsHorizontalScrollIndicator={false}
                  onViewableItemsChanged={onViewChildItemsChanged}
                  viewabilityConfig={viewabilityConfig}
                  renderItem={({ item }) => <Image source={item.child} />}
                />
                <View className="flex flex-row gap-2 mt-2 justify-center items-center">
                  {flatList.map((item, index) => (
                    <View
                      key={index}
                      className={`h-2 rounded-full w-2 ${
                        currentIndex === index ? "bg-black" : "bg-white"
                      }`}
                    />
                  ))}
                </View>
              </View>

              <TouchableOpacity
                onPress={() => {
                  if (currentIndex < flatList.length - 1) {
                    scrollToIndex(currentIndex + 1);
                  }
                }}
                className={`bg-[#777777]  h-10 justify-center rounded-full w-10 flex items-center ${
                  currentIndex === flatList.length - 1 ? "opacity-50" : ""
                }`}
                disabled={currentIndex === flatList.length - 1}
              >
                <NextIcon />
              </TouchableOpacity>
            </View>
          </View>
          <Text className="text-center text-2xl text-white font-bold">
            Swap Face
          </Text>
        </View>
      )}
      {indexContent === 1 && (
        <>
          <View className="flex flex-col items-center gap-3">
            <View className="flex justify-center h-[370px] flex-row">
              {loading && (
                <ActivityIndicator
                  size="large"
                  color="#ffff"
                  className="absolute bottom-[50%]"
                />
              )}
              <Animated.View style={{ opacity }}>
                <Video
                  source={Videos.trailerWelcome}
                  className="rounded-lg overflow-hidden"
                  shouldPlay
                  isLooping
                  resizeMode={ResizeMode.COVER}
                  style={{ height: 370, width: 354 }}
                  onLoad={handleLoad}
                  onError={() => setLoading(false)}
                  onLoadStart={() => setLoading(true)}
                />
              </Animated.View>
            </View>
            <View className="flex justify-center flex-row ">
              <Image source={images.welcome.childSecondImage} />
            </View>
            <Text className="text-center text-2xl text-white font-bold">
              Swap Video
            </Text>
          </View>
        </>
      )}
      {indexContent === 2 && (
        <>
          <View className="bg-white absolute top-0 left-4 p-2 rounded-full">
            <Link href={'/(tabs)'}>
              <AntDesign className="" name="close" size={24} color="#00403E" />
            </Link>
          </View>
          <View className="flex flex-col items-center justify-end mt-[30vh]">
            <Text className="text-4xl text-center mr-4 font-bold text-white">
              100{" "}
              <Image
                source={images.coinImage}
                className="h-[24px] w-[24px] -translate-y-1"
              />{" "}
              = $3
            </Text>
            <View className=" flex flex-col items-center  ">
              <View>
                {itemCoin.map((item, index) => (
                  <View key={index} className="flex flex-row gap-2 mt-4">
                    <Image source={item.image} />
                    <Text className="text-xl font-bold text-white">
                      {item.title}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
            <TouchableHighlight
              className="bg-[#CF3736] py-1.5 px-10 rounded-md mt-14"
              underlayColor="#CF3736"
              activeOpacity={0.6}
              onPress={() => console.log("Payment button pressed")}
            >
              <Text className="text-white font-medium text-2xl">
                Payment $3
              </Text>
            </TouchableHighlight>
          </View>
        </>
      )}
    </>
  );
}
