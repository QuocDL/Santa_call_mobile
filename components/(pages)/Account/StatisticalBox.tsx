import images from '@/assets/images';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Link } from "expo-router";
import React, { useState } from 'react';
import { Image, Switch, Text, View } from "react-native";
export default function StatisticalBox() {
   const [isEnabledNotification, setIsEnabled] = useState(false);
   const toggleSwitch = () => setIsEnabled(previousState => !previousState);
   return (
      <>
         <View className="bg-[#FF0200] overflow-hidden mt-4 rounded-md ">
            <View className="flex  flex-row items-center py-1.5 px-2">
               <Text className="text-lg font-bold text-white">Statistical</Text>
            </View>
            {/* Infomation user */}
            <View className="bg-white px-4 pt-2 pb-4">
               <View className='border-b-[2px]  flex flex-row justify-between items-center border-[#FF0200]'>
                  <Text className='text-[#00403E] text-lg'>
                     Time
                  </Text>
                  <View className='border-l-[2px] pb-1.5 border-[#FF0200] flex justify-center items-center gap-x-1 flex-row w-14'>
                     <Text className='text-[#00403E] text-lg '>
                        -5
                     </Text>
                     <Image source={images.coinImage} />
                  </View>
               </View>
               <View className='flex flex-row justify-between items-center '>
                  <Text className='text-[#00403E] text-base'>
                     August 17, 2024  10:00 Am
                  </Text>
                  <View className='border-l-[2px] pb-1.5 border-[#FF0200] flex justify-center items-center gap-x-1 flex-row w-14'>
                     <Text className='text-[#00403E] text-base '>
                        -1
                     </Text>
                     <Image source={images.coinImage} />
                  </View>
               </View>
               <View className='flex flex-row justify-between items-center '>
                  <Text className='text-[#00403E] text-base'>
                     August 17, 2024  10:00 Am
                  </Text>
                  <View className='border-l-[2px] pb-1.5 border-[#FF0200] flex justify-center items-center gap-x-1 flex-row w-14'>
                     <Text className='text-[#00403E] text-base '>
                        -1
                     </Text>
                     <Image source={images.coinImage} />
                  </View>
               </View>
               <View className='flex flex-row justify-between items-center '>
                  <Text className='text-[#00403E] text-base'>
                     August 17, 2024  10:00 Am
                  </Text>
                  <View className='border-l-[2px] pb-1.5 border-[#FF0200] flex justify-center items-center gap-x-1 flex-row w-14'>
                     <Text className='text-[#00403E] text-base '>
                        -1
                     </Text>
                     <Image source={images.coinImage} />
                  </View>
               </View>
               <View className='flex flex-row justify-between items-center '>
                  <Text className='text-[#00403E] text-base'>
                     August 17, 2024  10:00 Am
                  </Text>
                  <View className='border-l-[2px] pb-1.5 border-[#FF0200] flex justify-center items-center gap-x-1 flex-row w-14'>
                     <Text className='text-[#00403E] text-base '>
                        -1
                     </Text>
                     <Image source={images.coinImage} />
                  </View>
               </View>
            </View>
         </View>
      </>
   )
}
