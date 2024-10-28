import { Stack, useRouter } from "expo-router";
import { View } from "react-native";
import NotificationIcon from "@/assets/Icons/Notification";
import AntDesign from "@expo/vector-icons/AntDesign";

export default () => {
  const router = useRouter();
  return (
    <Stack>
      <Stack.Screen
        name="login"
        options={{
          animation: "fade",
          headerTransparent: true,
          headerTitle: "Sign in",
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
                onPress={() => router.replace('/(tabs)')}
              />
            </View>
          ),
        }}
      />
    </Stack>
  );
};
