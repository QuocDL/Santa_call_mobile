import { AntDesign } from "@expo/vector-icons";
import { AVPlaybackSource, ResizeMode, Video } from "expo-av";
import React, { useRef, useState } from "react";
import { ActivityIndicator, TouchableOpacity } from "react-native";

type IPropsVideoLoading = {
  source: string | AVPlaybackSource;
};

export default function VideoLoading({ source }: IPropsVideoLoading) {
  const [loadingSource, setLoadingSource] = useState<boolean>();
  const videoRef = useRef<Video | null>(null);
  const handlePlayPress = () => {
    if (videoRef.current) {
      videoRef.current.presentFullscreenPlayer();
      videoRef.current.playAsync();
    }
  };
  return (
    <>
      <Video
        ref={videoRef}
        className={`relative w-full h-full`}
        resizeMode={ResizeMode.COVER}
        source={typeof source === "string" ? { uri: source } : source}
        shouldPlay={false}
        isLooping={true}
        onLoad={() => setLoadingSource(false)}
        onError={() => setLoadingSource(false)}
        onLoadStart={() => setLoadingSource(true)}
      />
      {loadingSource ? (
        <ActivityIndicator  color={'red'} className="absolute top-[50%] -translate-y-5 left-[50%] -translate-x-3"/>
      ) : (
        <TouchableOpacity
          onPress={handlePlayPress}
          className=" absolute top-[50%] -translate-y-5 left-[50%] -translate-x-5"
        >
          <AntDesign name="play" size={30} color="#CF3736" />
        </TouchableOpacity>
      )}
    </>
  );
}
