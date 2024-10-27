import { Image, StyleSheet, Platform, View, Text, ImageBackground } from 'react-native';
import bgImage from '../../assets/images/imageBG.png'
export default function HomeScreen() {
  return (
   <ImageBackground 
   className='h-full w-full'
   resizeMode="cover"
   source={bgImage}
   >
     <View className='mt-12'>
      <Text className='text-red-500 text-2xl'>Hello</Text>
    </View>
   </ImageBackground>
  );
}
