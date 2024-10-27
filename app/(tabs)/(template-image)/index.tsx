import images from '@/assets/images'
import { Link } from 'expo-router'
import React from 'react'
import { ImageBackground, Text } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

export default function index() {
  return (
    <SafeAreaProvider>
      <ImageBackground
        className="h-full w-full relative -z-[10]"
        resizeMode="stretch"
        source={images.bgImage}
      >
       
          <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Link href={'/swap/swap-image/2'}>Swap</Link>
          </SafeAreaView>
      </ImageBackground>
    </SafeAreaProvider>
  )
}
