import PlayVideo from "@/assets/Icons/PlayVideo";
import { useRouterProtected } from "@/hooks/Protected/useRouterProtected";
import { AVPlaybackSource, ResizeMode, Video } from "expo-av";
import { Href, LinkProps } from "expo-router";
import React, { memo, useRef, useState } from "react";
import {
  ActivityIndicator,
  Image,
  ImageResizeMode,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { VideoFullscreenUpdate } from "expo-av";

type IProps = {
  imageSource?: string | ImageSourcePropType;
  videoSrouce?: string | AVPlaybackSource;
  href: Href<LinkProps<string>>;
  description?: string;
  title?: string;
  size?: "medium" | "large";
  resizeMode?: ImageResizeMode | ResizeMode;
};

const SwapVideoCard = ({
  description,
  imageSource,
  title,
  videoSrouce,
  href,
  size = "medium",
  resizeMode = "cover",
}: IProps) => {
  const [loadingSource, setLoadingSource] = useState<boolean>(true);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const router = useRouterProtected();
  const videoRef = useRef<Video | null>(null);

  const handlePlayPress = () => {
    if (videoRef.current) {
      videoRef.current.presentFullscreenPlayer(); 
      videoRef.current.playAsync(); 
    }
  };

  const handleFullscreenUpdate = (event: any) => {
    if (event.fullscreenUpdate === VideoFullscreenUpdate.PLAYER_DID_PRESENT) {
      setIsFullscreen(true);
    } else if (event.fullscreenUpdate === VideoFullscreenUpdate.PLAYER_DID_DISMISS) {
      if (videoRef.current) {
        videoRef.current.stopAsync();
      }
      setIsFullscreen(false);
    }
  };

  const handleVideoLoadStart = () => {
    setLoadingSource(true);
  };

  const handleVideoLoadEnd = () => {
    setLoadingSource(false);
  };

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => (loadingSource ? null : router.navigate(href))}
      className={`bg-white relative rounded-md overflow-hidden ${
        size === "medium" && "h-[130px] w-[210px]"
      } ${size === "large" && "w-[50%] h-[150px]"}`}
    >
      {loadingSource && (
        <View
          className="w-full h-full"
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ActivityIndicator color="#C90019" />
        </View>
      )}

      {imageSource ? (
        <Image
          source={
            typeof imageSource === "string" ? { uri: imageSource } : imageSource
          }
          resizeMode={resizeMode}
          onLoadStart={handleVideoLoadStart}
          onLoadEnd={handleVideoLoadEnd}
        />
      ) : (
        <Video
          className="w-full h-full"
          ref={videoRef}
          resizeMode={isFullscreen ? ResizeMode.CONTAIN : resizeMode as ResizeMode}  
          source={
            typeof videoSrouce === "string" ? { uri: videoSrouce } : videoSrouce
          }
          posterSource={
            typeof videoSrouce === "string" ? { uri: videoSrouce } : videoSrouce as ImageSourcePropType
          }
          usePoster={true}
          isMuted={false}
          shouldPlay={false}
          isLooping={true}
          onError={() => setLoadingSource(false)}
          onLoadStart={handleVideoLoadStart}
          onReadyForDisplay={handleVideoLoadEnd}
          onFullscreenUpdate={handleFullscreenUpdate}
        />
      )}

      <View
        className="absolute bottom-0 bg-black/60 w-full px-2 py-1.5"
      >
        <View>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            className="text-white font-bold w-[70%] text-xs"
          >
            {title || "Name video"}
          </Text>
          <Text className="text-white text-xs">
            {description || "Swap day: 12/10/2024"}
          </Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => (loadingSource ? null : router.navigate(href))}
          className="absolute right-1 bg-[#C90019] px-2 py-1.5 bottom-1.5 rounded-md"
        >
          <Text className="text-white font-medium">Use</Text>
        </TouchableOpacity>
      </View>

      {!loadingSource && (
        <TouchableOpacity
          onPress={handlePlayPress}
          className="absolute top-[50%] bg-tr -translate-y-5 right-[50%] translate-x-5"
        >
          <PlayVideo />
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};

export default memo(SwapVideoCard);
