import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Link } from "expo-router";
import { useState } from "react";
import { Switch, Text, View } from "react-native";
export default function SettingsBox() {
   const [isEnabledNotification, setIsEnabled] = useState(false);
   const toggleSwitch = () => setIsEnabled(previousState => !previousState);
   return (
      <>
         <View className="bg-[#FF0200] overflow-hidden mt-4 rounded-md ">
            <View className="flex  flex-row items-center py-1.5 px-2">
               <Text className="text-lg font-bold text-white">Settings</Text>
            </View>
            {/* Infomation user */}
            <View className="bg-white px-4 py-2">
               <View className="flex justify-between flex-row items-center">
                  <Text className="text-[#00403E] text-sm">
                     Notify when new templates are available
                  </Text>
                  <Switch
                     trackColor={{ false: '#767577', true: '#000000' }}
                     thumbColor={isEnabledNotification ? '#FF0200' : '#f4f3f4'}
                     ios_backgroundColor="#3e3e3e"
                     onValueChange={toggleSwitch}
                     value={isEnabledNotification}
                  />
               </View>
               <Link href={'/(tabs)'} className="w-full mt-2">
                  <View  className="flex  justify-between w-full flex-row items-center">
                     <Text className="text-[#00403E] text-sm">In-app purchases</Text>
                     <MaterialIcons name="navigate-next" size={32} color="black" />
                  </View>
               </Link>
               <Link href={'/(tabs)'} className="w-full mt-2">
                  <View  className="flex  justify-between w-full flex-row items-center">
                     <Text className="text-[#00403E] text-sm">Payment method</Text>
                     <MaterialIcons name="navigate-next" size={32} color="black" />
                  </View>
               </Link>
            </View>
         </View>
      </>
   )
}
