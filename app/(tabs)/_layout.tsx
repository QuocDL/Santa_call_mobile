import HomeIcon from "@/assets/Icons/Home";
import VideoIcon from "@/assets/Icons/Video";
import ImageIcon from "@/assets/Icons/Images";
import AccountIcon from "@/assets/Icons/Account";
import SwapIcon from "@/assets/Icons/Swap";
import { Tabs, useSegments } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { ImageBackground, Platform, View } from "react-native";
import images from "@/assets/images";
import ProtectedAuth from "@/components/Protected/ProtectedAuth";
import AuthProtectedModal from "@/components/_common/AuthProtectedModal";
export default function TabLayout() {
  return (
    <>
      <ProtectedAuth>
        <ImageBackground
          style={{ flex: 1 }}
          source={images.bgImage}
          resizeMode="cover"
        >
          <StatusBar style="light" />
          {/* Showing tab */}
          <Tabs
            screenOptions={{
              tabBarActiveTintColor: "#FF0000", 
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
              name="index"
              options={{
                title: "Home",
                tabBarIcon: ({ color }) => <HomeIcon color={color} />,
              }}
            />
            <Tabs.Screen
              name="TemplateVideo"
              options={{
                title: "TemplateVideo",
                tabBarIcon: ({ color }) => <VideoIcon color={color} />,
              }}
            />
            <Tabs.Screen
              name="(protected)/QuickSwap"
              options={{
                title: "QuickSwap",
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
              name="TemplateImage"
              options={{
                title: "TemplateImage",
                tabBarIcon: ({ color }) => <ImageIcon color={color} />,
              }}
            />
            <Tabs.Screen
              name="(protected)/Account"
              options={{
                title: "Account",
                tabBarIcon: ({ color }) => <AccountIcon color={color} />,
              }}
            />
            {/* Hidden Tab */}
            <Tabs.Screen
              name="(protected)/swap"
              options={{
                tabBarButton: () => null, 
              }}
            />
         
          </Tabs>
        </ImageBackground>
        <AuthProtectedModal/>
      </ProtectedAuth>
    </>
  );
}
