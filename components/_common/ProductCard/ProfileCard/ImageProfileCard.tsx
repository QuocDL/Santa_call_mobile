import images from "@/assets/images";
import { useRouterProtected } from "@/hooks/Protected/useRouterProtected";
import { LinkType } from "@/interfaces/Helper";
import { cardStyle } from "@/styles/CardStyle";
import { Entypo, Feather, FontAwesome5 } from "@expo/vector-icons";
import { Href, LinkProps } from "expo-router";
import React, { memo, useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  Image,
  ImageResizeMode,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const ImageProfile = ({
  href,
  image,
  date,
  albumName,
  size = "large",
  resizeMode = "cover",
}: {
  href: Href<LinkProps<string>>;
  image?: string | ImageSourcePropType;
  date?: string;
  albumName?: string;
  size?: "medium" | "large";
  resizeMode?: ImageResizeMode;
}) => {
  const router = useRouterProtected();
  const [loadingImg, setLoadingImg] = useState<boolean>();
  const { width, height } = Dimensions.get("window");

  return (
    <View
    style={{
      width: width * 0.465,
      height: height * 0.28
    }}
      className={`relative  bg-white overflow-hidden rounded-md flex flex-row justify-center items-center`}
    >
      {loadingImg && (
        <View
          className="w-full h-full "
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ActivityIndicator color="#C90019" />
        </View>
      )}
      <Image
        className="w-full h-full"
        source={
          image
            ? typeof image === "string"
              ? { uri: image }
              : image
            : images.featuredImage
        }
        resizeMode={resizeMode}
        onLoad={() => setLoadingImg(true)}
        onLoadStart={() => setLoadingImg(false)}
        onLoadEnd={() => setLoadingImg(false)}
      />
      <View
        className={`absolute bottom-0 bg-white/60 w-full ${
          size === "large" ? "" : "pt-4"
        } pb-1 px-1`}
      >
        <View>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            className={`font-bold text-black ${
              size === "large" ? "mb-1" : "text-xs"
            } w-[60%]`}
          >
            {date || "12/10/2024"}
          </Text>
          <Text className="text-black text-sm">
            {albumName || "Album name"}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() =>
            loadingImg ? null : router.navigate(href as LinkType)
          }
          className={`absolute right-2 top-2`}
        >
          <Feather name="download" size={24} color="#FF0000" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => (loadingImg ? null : router.navigate(href as LinkType))}
        className={`absolute right-2 top-2`}
      >
        <FontAwesome5 name="trash" size={24} color="#FF0000" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => (loadingImg ? null : router.navigate(href as LinkType))}
        className={`absolute left-2 top-2`}
      >
        <Entypo name="share" size={24} color="#FF0000" />
      </TouchableOpacity>
    </View>
  );
};

export default memo(ImageProfile);
