import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { Platform } from "react-native";
import "react-native-reanimated";
import ProviderRedux from "@/components/Provider/ProviderRedux";
import { ToastProvider } from "react-native-toast-notifications";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useReactQueryDevTools } from '@dev-plugins/react-query';
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
      retry: 3,
      staleTime: 0,
      refetchInterval: 10000 * 60
    }
  }
})
export default function RootLayout() {
  const [loaded] = useFonts({
    PoppinsBold: require("../assets/fonts/Poppins-Medium.ttf"),
  });
  useReactQueryDevTools(queryClient);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  return (
    <ProviderRedux>
      <QueryClientProvider client={queryClient}>
        <ToastProvider
          swipeEnabled={true}
          textStyle={{ fontSize: 16 }}
          offsetBottom={120}
          offsetTop={80}
          style={{
            zIndex: 9999, 
          }}
        >
          <Stack
            screenOptions={{
              animation: Platform.OS === "android" ? "ios" : "fade",
              animationDuration: Platform.OS === "android" ? 600 : 400,
            }}
          >
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="(protected)" options={{headerShown: false}}/>
            <Stack.Screen name="auth" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
          </Stack>
        </ToastProvider>
      </QueryClientProvider>
    </ProviderRedux>
  );
}
