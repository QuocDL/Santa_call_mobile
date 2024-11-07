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
  const [play,setPlay]= useState(false)
  const handlePlayPress = () => {
    setPlay(true)
    videoRef.current?.playAsync()
  };

  const handlePlaybackStatusUpdate = (status: any) => {
    if(status.positionMillis === status.durationMillis){
      setPlay(false)
    }
  };
  return (
    <>
      <Video
        ref={videoRef}
        className={`relative w-full h-full`}
        resizeMode={ResizeMode.COVER}
        source={typeof source === "string" ? { uri: source } : source}
        shouldPlay={play}
        useNativeControls={play}
        onPlaybackStatusUpdate={handlePlaybackStatusUpdate}
        onLoadStart={() => setLoadingSource(true)}
        onError={() => setLoadingSource(false)}
        onReadyForDisplay={() => setLoadingSource(false)}
      />
      {loadingSource ? (
        <ActivityIndicator  color={'red'} className="absolute top-[50%] -translate-y-5 left-[50%] -translate-x-3"/>
      ) : (
        !play && <TouchableOpacity
        onPress={handlePlayPress}
        className=" absolute top-[50%] -translate-y-5 left-[50%] -translate-x-5"
      >
        <AntDesign name="play" size={30} color="#CF3736" />
      </TouchableOpacity>
      )}
    </>
  );
}
