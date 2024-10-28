import images from "@/assets/images";
import { Slot, useRouter, useSegments } from "expo-router";
import React, { useEffect, useState } from "react"; // Import useState
import { ActivityIndicator, Image, ImageBackground, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function ProtectedProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const segment = useSegments() as string[];
  const isAuth = false;
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const requiresAuth = ["(protected)", "swap"].some((s) => segment.includes(s));
    if (requiresAuth && !isAuth) {
      setLoading(true);
      setTimeout(() => {
        router.replace("/auth/login");
        setLoading(false);
      }, 1500);
    }
  }, [segment]);

  if (loading) {
    return (
      <SafeAreaProvider>
        <ImageBackground
          style={{ flex: 1 }}
          source={images.bgImage}
          resizeMode="cover"
        >
          <SafeAreaView
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
                gap: 5,
              }}
            >
              <Image source={images.Santa} />
              <ActivityIndicator size="large" color="#ffffff" />
            </View>
          </SafeAreaView>
        </ImageBackground>
      </SafeAreaProvider>
    );
  }

  return <>{children}</>;
}
