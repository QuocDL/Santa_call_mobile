import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { Platform } from "react-native";
import "react-native-reanimated";
import ProviderRedux from "@/components/Provider/ProviderRedux";
import { ToastProvider } from "react-native-toast-notifications";
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    PoppinsBold: require("../assets/fonts/Poppins-Medium.ttf"),
  });

  useEffect(() => {
    // const setBackgroundColor = async () => {
    //   await  Platform.OS === "android" && NavigationBar.setVisibilityAsync('hidden');
    // };
    // setBackgroundColor();
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ProviderRedux>
      <ToastProvider swipeEnabled={true} textStyle={{fontSize: 16}} offsetBottom={120} offsetTop={50}>
        <Stack
          screenOptions={{
            animation: Platform.OS === "android" ? "simple_push" : "fade",
            animationDuration: Platform.OS === "android" ? 1200 : 300,
          }}
        >
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="auth" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      </ToastProvider>
    </ProviderRedux>
  );
}
