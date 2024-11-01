import PlayVideo from "@/assets/Icons/PlayVideo";
import images from "@/assets/images";
import { Videos } from "@/assets/Videos";
import { cardStyle } from "@/styles/CardStyle";
import { AVPlaybackSource, ResizeMode, Video } from "expo-av";
import { Href, LinkProps, useRouter } from "expo-router";
import React, { useRef, useState } from "react";
import {
  ActivityIndicator,
  Image,
  ImageResizeMode,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
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
  size = "large",
  resizeMode = "cover",
}: IProps) => {
  const [loadingSource, setLoadingSource] = useState<boolean>();
  const router = useRouter();
  const videoRef = useRef<Video | null>(null);
  const handlePlayPress = () => {
    if (videoRef.current) {
      videoRef.current.presentFullscreenPlayer();
      videoRef.current.playAsync();
    }
  };
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => (loadingSource ? null : router.navigate(href))}
      className={`bg-white relative  rounded-md overflow-hidden ${
        size === "large" && "h-[130px] w-[210px]"
      } ${size === "medium" && "w-[175px] h-[141px]"} `}
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
          onLoadStart={() => setLoadingSource(true)}
          onLoadEnd={() => setLoadingSource(false)}
        />
      ) : (
        <Video
          className="w-full h-full"
          ref={videoRef}
          resizeMode={resizeMode as ResizeMode}
          source={
            typeof videoSrouce === "string" ? { uri: videoSrouce } : videoSrouce
          }
          isMuted={true}
          shouldPlay={false}
          isLooping={true}
          onLoad={() => setLoadingSource(false)}
          onError={() => setLoadingSource(false)}
          onLoadStart={() => setLoadingSource(true)}
        />
      )}

      <View
        style={cardStyle.background}
        className="absolute bottom-0 w-full px-2 py-1.5"
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
      <TouchableOpacity
        onPress={handlePlayPress}
        className="absolute top-[50%] -translate-y-5 right-[50%] translate-x-5"
      >
        <PlayVideo />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default SwapVideoCard;
