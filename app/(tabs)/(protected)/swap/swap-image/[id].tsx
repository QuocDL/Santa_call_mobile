import images from '@/assets/images'
import { useLocalSearchParams } from 'expo-router'
import React from 'react'
import { ImageBackground, Text, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

export default function SwapImage() {
  const {id} = useLocalSearchParams()
  return (
    <SafeAreaProvider>
    <ImageBackground
      className="h-full w-full relative -z-[10]"
      resizeMode="stretch"
      source={images.bgImage}
    >
     
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>With id: {id}</Text>
        </SafeAreaView>
    </ImageBackground>
  </SafeAreaProvider>
  )
}
