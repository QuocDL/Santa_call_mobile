import { AntDesign } from '@expo/vector-icons'
import { Href, LinkProps, useRouter } from 'expo-router'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const SeeImageCard = ({seeMore}: {seeMore: Href<LinkProps<string>>}) => {
   const router = useRouter()
  return (
      <TouchableOpacity activeOpacity={0.7} onPress={()=> router.navigate(seeMore)} className='bg-white w-[135px] h-[176px] rounded-md flex flex-row justify-center items-center'>
         <View className='flex flex-row items-center gap-x-2'>
            <Text className='text-[#C90018] font-bold'>See More</Text>
            <AntDesign name="rightcircleo" size={20} color="#C90018" />
         </View>
      </TouchableOpacity>
  )
}

export default SeeImageCard
