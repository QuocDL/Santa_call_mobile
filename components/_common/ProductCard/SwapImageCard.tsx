import images from "@/assets/images";
import { useRouterProtected } from "@/hooks/Protected/useRouterProtected";
import { LinkType } from "@/interfaces/Helper";
import { cardStyle } from "@/styles/CardStyle";
import { Href, LinkProps } from "expo-router";
import React, { useState, memo } from "react";
import {
  ActivityIndicator,
  Image,
  ImageResizeMode,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const SwapImageCard = ({
  href,
  image,
  title,
  description,
  size = "large",
  resizeMode = "cover",
}: {
  href: Href<LinkProps<string>>; 
  image?: string | ImageSourcePropType;
  title?: string;
  description?: string;
  size?: "medium" | "large";
  resizeMode?: ImageResizeMode;
}) => {
  const router = useRouterProtected();
  const [loadingImg, setLoadingImg] = useState<boolean>();
  
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => (loadingImg ? null : router.navigate(href as LinkType))}
      className={`relative  bg-white overflow-hidden rounded-md flex flex-row justify-center items-center ${
        size === "medium" && "w-[135px] h-[176px]"
      } ${size === "large" && "w-[50%] h-[210px]"}`}
    >
      {loadingImg && (
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
      <Image
        source={
          image
            ? typeof image === "string"
              ? { uri: image }
              : image
            : images.featuredImage
        }
        resizeMode={resizeMode}
        onLoadStart={() => setLoadingImg(true)}
        onLoadEnd={() => setLoadingImg(false)}
      />
      <View
        className={`absolute bottom-0 w-full ${size === 'large' ? '' : 'pt-4'} pb-1 px-1`}
        style={cardStyle.background}
      >
        <View>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            className={`font-bold text-white ${size === 'large' ?'mb-2' :'text-xs' } w-[60%]`}
          >
            {title || "Name photo"}
          </Text>
          <Text className="text-white text-xs mt-1">
            {description || "Swap day: 12/10/2024"}
          </Text>
        </View>
        <TouchableOpacity onPress={()=> (loadingImg ? null : router.navigate(href as LinkType))} className={`absolute ${size === 'large' ? 'right-1 top-3' : 'right-1 top-0.5'}  bg-[#C90019] py-1 px-3 rounded-md`}>
          <Text className="text-white">Use</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default memo(SwapImageCard);
