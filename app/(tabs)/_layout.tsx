import HomeIcon from '@/assets/Icons/Home';
import VideoIcon from '@/assets/Icons/Video';
import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, View } from 'react-native';
import * as NavigationBar from 'expo-navigation-bar';
export default function TabLayout() {
 Platform.OS === 'android' &&  NavigationBar.setVisibilityAsync('hidden');
  return (
    <>
      <StatusBar style="light" />
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: '#FF0000', // Màu đỏ khi tab được chọn
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,          
          tabBarStyle: {
            height: Platform.OS === 'ios' ? 70 : 50 ,
            backgroundColor: '#000000',
            borderBlockColor: '#000000'
          },
          
        }}
       
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <HomeIcon color={color} />,
          }}
        />

        <Tabs.Screen
          name="explore"
          options={{
            title: 'Explore',
            tabBarIcon: ({ color }) => (
              <View style={{
                position: 'absolute',
                top: -30, 
                backgroundColor: '#000000',
                padding: 5,
                borderRadius: 50,
                borderColor: '#FF0000',
                borderWidth: 4,
              }}>
                <VideoIcon color={color}/>
              </View>
            ),
          }}
        />

      </Tabs>
    </>
  );
}
