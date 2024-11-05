import { Stack, useRouter } from "expo-router";
import { View } from "react-native";
import NotificationIcon from "@/assets/Icons/Notification";
import AntDesign from "@expo/vector-icons/AntDesign";

export default () => {
  const router = useRouter();
  return (
    <Stack>
      <Stack.Screen
        name="swap-image/[id]"
        options={{
          animation: "fade",
          headerTransparent: true,
          headerTitle: "Swap image",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 20,
            color: "white",
            fontWeight: "bold",
          },
          headerLeft: () => (
            <View>
              <AntDesign
                name="left"
                size={24}
                color="white"
                onPress={() =>
                  router.canGoBack()
                    ? router.back()
                    : router.navigate("/(tabs)")
                }
              />
            </View>
          ),
          headerRight: () => (
            <View className="py-1.5 px-2 bg-white rounded-full">
              <NotificationIcon />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="QuickSwap"
        options={{
          animation: "fade",
          headerTransparent: true,
          headerTitle: "Quick Swap",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 20,
            color: "white",
            fontWeight: "bold",
          },
          headerLeft: () => (
            <View>
              <AntDesign
                name="left"
                size={24}
                color="white"
                onPress={() =>
                  router.canGoBack()
                    ? router.back()
                    : router.navigate("/(tabs)")
                }
              />
            </View>
          ),
          headerRight: () => (
            <View className="py-1.5 px-2 bg-white rounded-full">
              <NotificationIcon />
            </View>
          ),
        }}
      />
    </Stack>
  );
};
