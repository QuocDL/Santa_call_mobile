import AddphotoIcon from '@/assets/Icons/Addphoto'
import images from '@/assets/images'
import { Videos } from '@/assets/Videos'
import SwapImageCard from '@/components/_common/ProductCard/SwapImageCard'
import SwapVideoCard from '@/components/_common/ProductCard/SwapVideoCard'
import ProviderContent from '@/components/Provider/ProviderContent'
import { useMediaPhone } from '@/hooks/useMediaPhone'
import { LinkType } from '@/interfaces/Helper'
import { AntDesign } from '@expo/vector-icons'
import { useLocalSearchParams } from 'expo-router'
import React from 'react'
import { FlatList, Image, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native'

export default function SwapImage() {
  const { id } = useLocalSearchParams()
  const { imageUri, showImagePickerOptions } = useMediaPhone()
  return (
    <ProviderContent
      backgroundImage={images.bgImage}
      viewScroll='flatlist'
      classNameScroll={`min-h-screen ${Platform.OS === 'android' && 'mt-[15%]'}`}
      overflowBottom={{enable: true, height: 150}}
    >
      <View className='px-[4%] mt-4'>
        <Text className='text-white text-xl font-bold'>Name Template {id}</Text>
        <View className='flex flex-row justify-end mr-[7%] mt-4'>
          <Text className='text-xl font-bold text-white'>Swap Image</Text>
        </View>
        <View className='mt-2 flex flex-row items-center justify-between'>
          <View>
            <TouchableOpacity activeOpacity={0.9} onPress={() => showImagePickerOptions({
              title: 'Choose Image',
              describe: 'Choose your image to swapface'
            })} className='w-[160px] h-[231px] flex flex-row justify-center items-center overflow-hidden bg-white rounded-md'>
              {imageUri ?
                <Image source={{ uri: imageUri }} className='w-full h-full' resizeMode='cover' />
                : <AddphotoIcon />}
            </TouchableOpacity>
            <TextInput className='bg-white mt-2 h-[35px] rounded-md pl-2' placeholder='Enter file name...' placeholderTextColor={'#777777'} />
          </View>
          <View>
            <TouchableOpacity activeOpacity={0.9} onPress={() => null} className='w-[160px] h-[231px] flex flex-row justify-center items-center overflow-hidden bg-white rounded-md'>

            </TouchableOpacity>
            <TouchableOpacity className='bg-[#FF0200] h-[35px] mt-2 rounded-md flex flex-row justify-center items-center'>
              <AntDesign name="download" size={18} color="white" />
              <Text className='text-base text-white ml-2'>Download</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className='flex mt-6 flex-row justify-center items-center'>
          <TouchableOpacity className='bg-[#FF0200] px-3 py-2 rounded-md'>
            <Text className='text-white text-base font-medium'>Swap    -1 <Image source={images.coinImage} /></Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text className='text-xl font-bold px-[4%] text-white mt-2'>Propose</Text>
        <FlatList
          className="pl-[4%] mt-1 py-1.5"
          data={Array.from({ length: 5 })}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            gap: 15,
            paddingRight: 30,
          }}
          renderItem={() => (
            <SwapImageCard
              size="medium"
              href={"/(tabs)/(protected)/QuickSwap" as LinkType}
            />
          )}
        />
         <FlatList
          className="pl-[4%] mt-1 py-1.5"
          data={Array.from({ length: 5 })}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            gap: 15,
            paddingRight: 30,
          }}
          renderItem={() => (
            <SwapVideoCard
              href={"/(tabs)/TemplateVideo"}
              videoSrouce={Videos.trailerWelcome}
            />
          )}
         
        />
      </View>
    </ProviderContent>
  )
}
