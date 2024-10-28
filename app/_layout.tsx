import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { Platform } from "react-native";
import "react-native-reanimated";
import * as NavigationBar from 'expo-navigation-bar';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    PoppinsBold: require("../assets/fonts/Poppins-Medium.ttf"),
  });

  useEffect(() => {
   
    const setBackgroundColor = async () => {
      await  Platform.OS === "android" && NavigationBar.setVisibilityAsync('hidden');
    };

    setBackgroundColor();

    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ animation: 'fade',headerShown: false}}/>
      <Stack.Screen name="(tabs)" options={{ animation: 'fade', headerShown: false }} />
      <Stack.Screen name="swap" options={{animation: 'fade', headerTransparent: true }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
