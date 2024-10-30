import images from "@/assets/images";
import { cardStyle } from "@/styles/CardStyle";
import { Href } from "expo-router";
import { Link, LinkProps, useRouter } from "expo-router";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { Shadow } from "react-native-shadow-2";
type IProps ={
   image: string;
   title: string;
   href:  Href<LinkProps<string>>
}
export default function CategoryCard({image, title, href}: IProps) {
   const router = useRouter()
   return (
      <Pressable onPress={()=> router.navigate(href)} className="relative h-[179px] overflow-hidden rounded-md w-full">
         <Image source={images.featuredImage} resizeMode="cover" />
         <View style={cardStyle.background} className="absolute bottom-0 bg-black px-2 py-1.5 bg-opacity-40  w-full">
            <Text className="font-bold text-lg text-[#FF001E]">{title}</Text>
            <Text className="font-semibold text-sm text-white">More than 50 images</Text>
            <Text className="text-sm text-white">Turns of use: 221.000</Text>
            <View className="absolute bottom-3 right-3">
               <Shadow
                  distance={8}
                  offset={[4, 2]}
               >
                  <TouchableOpacity onPress={()=> router.navigate(href)} className="bg-[#C90019] rounded-sm py-1.5 px-2">
                     <Text className="text-white">Discover</Text>
                  </TouchableOpacity>
               </Shadow>
            </View>
         </View>
      </Pressable>
   )
}
