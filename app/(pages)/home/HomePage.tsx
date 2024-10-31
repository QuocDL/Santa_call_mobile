import React from 'react'
import { FlatList, Pressable, Text, View } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from 'expo-router';
import CategoryCard from '@/components/_common/ProductCard/CategoryCard';
import images from '@/assets/images';
import { Videos } from '@/assets/Videos';
import SeeImageCard from '@/components/_common/ProductCard/SeeImageCard';
import SwapImageCard from '@/components/_common/ProductCard/SwapImageCard';
export default function HomePage() {
  const router = useRouter()
  return (
    // All image box
    <View className=' mt-4 '>
      <View className='all_image_box px-[4%]'>
        <Pressable onPress={() => router.navigate('/(tabs)/TemplateImage')} className='flex justify-between flex-row items-center'>
          <Text className='text-white font-bold text-xl'>All Image</Text>
          <AntDesign name="right" size={24} color="white" />
        </Pressable>
        <View className='mt-2'>
          <CategoryCard cardType='image' image={images.featuredImage} href={'/(tabs)/TemplateImage'} title='Happy new year photos' />
        </View>
      </View>
      <View className='all_video_box mt-4 px-[4%]'>
        <Pressable onPress={() => router.navigate('/(tabs)/TemplateImage')} className='flex justify-between flex-row items-center'>
          <Text className='text-white font-bold text-xl'>All Video</Text>
          <AntDesign name="right" size={24} color="white" />
        </Pressable>
        <View className='mt-2'>
          <CategoryCard cardType='video' image={Videos.imageThumb} video={Videos.trailerWelcome} href={'/(tabs)/TemplateImage'} title='Happy new year videos' />
        </View>
      </View>
      <View className='mt-4'>
        <Pressable onPress={() => router.navigate('/(tabs)/TemplateImage')} className='flex px-[4%] justify-between flex-row items-center'>
          <Text className='text-white font-bold text-xl'>Latest swapped image</Text>
          <AntDesign name="right" size={24} color="white" />
        </Pressable>
        <FlatList
          className='pl-[4%] mt-2'
          data={Array.from({ length: 5 })}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            gap: 10,
            paddingRight: 30
          }}
          renderItem={(item) => (
            <SwapImageCard href={'/(tabs)/(protected)/QuickSwap'} />
          )}
          ListFooterComponent={() => (
            <SeeImageCard seeMore={'/(tabs)/TemplateImage'} />
          )}
        />
      </View>
    </View>
  )
}
