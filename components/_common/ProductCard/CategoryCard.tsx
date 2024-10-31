import PlayVideo from "@/assets/Icons/PlayVideo";
import images from "@/assets/images";
import { Videos } from "@/assets/Videos";
import { cardStyle } from "@/styles/CardStyle";
import { AVPlaybackSource, ResizeMode, Video } from "expo-av";
import { Href } from "expo-router";
import { Link, LinkProps, useRouter } from "expo-router";
import { Image, ImageSourcePropType, Pressable, Text, TouchableOpacity, View } from "react-native";
import { Shadow } from "react-native-shadow-2";
import React, { useRef } from "react";

type IProps = {
   image?: string | ImageSourcePropType ;
   video?: string | AVPlaybackSource;
   title: string;
   href: Href<LinkProps<string>>;
   cardType: "video" | "image";
};

export default function CategoryCard({
   image,
   video,
   title,
   href,
   cardType,
}: IProps) {
   const router = useRouter();
   const videoRef = useRef<Video | null>(null);
   const handlePlayPress = () => {
      if (videoRef.current) {
         videoRef.current.presentFullscreenPlayer();
         videoRef.current.playAsync()
      }
   };

   return (
      <Pressable
         onPress={() => router.navigate(href)}
         className="relative h-[179px] overflow-hidden rounded-md w-full"
      >
         <Image
            source={typeof image === 'string' ? { uri: image } : image}
            resizeMode="cover"
            className="w-full h-full"
         />
         {cardType === "video" &&  video && (
            <Video
               ref={videoRef}
               source={typeof video === 'string' ? { uri: video } : video}
               className="rounded-lg overflow-hidden hidden w-full h-full"
               resizeMode={ResizeMode.COVER}
               isMuted={true}
               shouldPlay={false}
               isLooping={true}
            />
         )}
         <View
            style={cardStyle.background}
            className="absolute bottom-0 bg-black px-2 py-1.5 bg-opacity-40 w-full"
         >
            <Text className="font-bold text-lg text-[#FF001E]">{title}</Text>
            <Text className="font-semibold text-sm text-white">
               More than 50 images
            </Text>
            <Text className="text-sm text-white">Turns of use: 221.000</Text>
            <View className="absolute bottom-3 right-3">
               <Shadow distance={8} offset={[4, 2]}>
                  <TouchableOpacity
                     onPress={() => router.navigate(href)}
                     className="bg-[#C90019] rounded-sm py-1.5 px-2"
                  >
                     <Text className="text-white">Discover</Text>
                  </TouchableOpacity>
               </Shadow>
            </View>
         </View>
         {cardType === "video" && (
            <TouchableOpacity
               onPress={handlePlayPress}
               className="absolute top-[40%] -translate-y-5 right-[50%] translate-x-5"
            >
               <PlayVideo />
            </TouchableOpacity>
         )}
      </Pressable>
   );
}
