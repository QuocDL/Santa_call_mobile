import HomeIcon from "@/assets/Icons/Home";
import VideoIcon from "@/assets/Icons/Video";
import ImageIcon from "@/assets/Icons/Images";
import AccountIcon from "@/assets/Icons/Account";
import SwapIcon from "@/assets/Icons/Swap";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Platform, View } from "react-native";
export default function TabLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#FF0000", // Màu đỏ khi tab được chọn
          headerShown: false,
          tabBarInactiveTintColor: "#FFFFFF",
          // tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          tabBarStyle: {
            height: Platform.OS === "ios" ? 70 : 50,
            backgroundColor: "#000000",
            borderBlockColor: "#000000",
          },
        }}
      >
        <Tabs.Screen
          name="(home)"
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => <HomeIcon color={color} />,
          }}
        />
         <Tabs.Screen
          name="(template-video)"
          options={{
            title: "image",
            tabBarIcon: ({ color }) => <VideoIcon color={color} />,
          }}
        />
        <Tabs.Screen
          name="explore"
          options={{
            title: "Explore",
            tabBarIcon: ({ color }) => (
              <View
                style={{
                  position: "absolute",
                  top: -30,
                  backgroundColor: "#000000",
                  padding: 5,
                  borderRadius: 50,
                  borderColor: "#FF0000",
                  borderWidth: 4,
                }}
              >
                <SwapIcon color={color} />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="(template-image)"
          options={{
            title: "image",
            tabBarIcon: ({ color }) => <ImageIcon color={color} />,
          }}
        />
          <Tabs.Screen
          name="test"
          options={{
            title: "image",
            tabBarIcon: ({ color }) => <AccountIcon color={color} />,
          }}
        />
      </Tabs>
      
    </>
  );
}
