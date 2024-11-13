import { AntDesign } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import { View } from "react-native";
import Notification from '@/assets/Icons/Notification'
export default () => {
  const router = useRouter();
  console.log('test')
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          animation: "fade",
          headerTransparent: true,
          headerTitle: "Products",
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
              <Notification />
            </View>
          ),
        }}
      />
    </Stack>
  );
};
