import React from 'react'
import { Pressable, Text, View } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from 'expo-router';
import CategoryCard from '@/components/_common/ProductCard/CategoryCard';
import images from '@/assets/images';
export default function HomePage() {
  const router = useRouter()
  return (
    // All image box
    <View className='px-[4%] mt-4'>
      <View className='all_image_box'>
        <Pressable onPress={() => router.navigate('/(tabs)/(protected)/TemplateImage')} className='flex justify-between flex-row items-center'>
          <Text className='text-white font-bold text-xl'>All Image</Text>
          <AntDesign name="right" size={24} color="white" />
        </Pressable>
        <View className='mt-2'>
          <CategoryCard image={images.featuredImage} href={'/(tabs)/(protected)/TemplateImage'} title='Happy new year photos' />
        </View>
      </View>
    </View>
  )
}
