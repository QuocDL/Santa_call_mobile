import PlayVideo from "@/assets/Icons/PlayVideo";
import { Feather } from "@expo/vector-icons";
import { AVPlaybackSource, ResizeMode, Video } from "expo-av";
import { Href, LinkProps, useRouter } from "expo-router";
import React, { useRef, useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  Image,
  ImageSourcePropType,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Shadow } from "react-native-shadow-2";

type IProps = {
  video?: string | AVPlaybackSource;
  date?: string;
  albumName?: string;
};
export default function VideoProfileCard({ video, date, albumName }: IProps) {
  const router = useRouter();
  const videoRef = useRef<Video | null>(null);
  const handlePlayPress = () => {
    if (videoRef.current) {
      videoRef.current.presentFullscreenPlayer();
      videoRef.current.playAsync();
    }
  };
  const [loadingSource, setLoadingSource] = useState<boolean>();
  const { width, height } = Dimensions.get("window");
  return (
    <View className="relative bg-white h-[179px] overflow-hidden rounded-md w-full">
      {loadingSource && (
        <>
          <View
            className="w-full h-full"
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ActivityIndicator color="#C90019" />
          </View>
        </>
      )}

      <Video
        ref={videoRef}
        source={typeof video === "string" ? { uri: video } : video}
        className="w-full h-full"
        resizeMode={ResizeMode.COVER}
        shouldPlay={false}
        isLooping={true}
        onLoadStart={() => setLoadingSource(true)}
        onReadyForDisplay={() => setLoadingSource(false)}
      />
      <View
        className="absolute bottom-0 bg-white/60 px-2 py-1.5 bg-opacity-40 w-full"
      >
        <Text className="font-bold text-base text-black">
          {date || "12/10/2024"}
        </Text>

        <Text className="text-sm text-black">{albumName || "Album name"}</Text>
        <View className="absolute bottom-3 right-3">
            <TouchableOpacity className="rounded-sm py-1.5 px-2">
              <Feather name="download" size={24} color="#FF0000" />
            </TouchableOpacity>
        </View>
      </View>
      {!loadingSource && (
        <TouchableOpacity
          onPress={handlePlayPress}
          className="absolute top-[50%] -translate-y-5 right-[50%] translate-x-5"
        >
          <PlayVideo />
        </TouchableOpacity>
      )}
    </View>
  );
}
