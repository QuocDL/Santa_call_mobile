import images from '@/assets/images'
import { cardStyle } from '@/styles/CardStyle'
import { AntDesign } from '@expo/vector-icons'
import { Href, LinkProps, useRouter } from 'expo-router'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

const SwapImageCard = ({href}: {href: Href<LinkProps<string>>}) => {
   const router = useRouter()
  return (
      <TouchableOpacity activeOpacity={0.9} onPress={()=> router.navigate(href)} className='relative bg-white overflow-hidden w-[135px] h-[176px] rounded-md flex flex-row justify-center items-center'>
       <Image source={images.featuredImage} resizeMode='cover'/>
       <View className='absolute bottom-0 w-full pt-1.5 pb-1.5 px-1' style={cardStyle.background}>
            <View>
               <Text className='font-bold text-white text-xs'>
                  Name Photo
               </Text>
               <Text className=' text-white text-xs mt-1'>
                  Swap day: 12/10/2024
               </Text>
            </View>
            <TouchableOpacity className='absolute right-1 top-0.5 bg-[#C90019] py-1 px-1 rounded-md'>
               <Text className='text-white'>Use</Text>
            </TouchableOpacity>
       </View>
      </TouchableOpacity>
  )
}

export default SwapImageCard
