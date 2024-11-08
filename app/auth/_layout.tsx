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
                onPress={() => router.canGoBack() ? router.back() : router.navigate('/(tabs)')}
              />
            </View>
          ),
        }}
      />
      <Stack.Screen
      name="register"
      options={{
        animation: "fade",
        headerTransparent: true,
        headerTitle: "Sign up",
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
              onPress={() => router.replace('/auth/login')}
            />
          </View>
        ),
      }}
    />
     <Stack.Screen
      name="forgotPassword"
      options={{
        animation: "fade",
        headerTransparent: true,
        headerTitle: "Forgot Password",
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
              onPress={() => router.canGoBack() ? router.back() : router.replace('/auth/login')}
            />
          </View>
        ),
      }}
    />
    </Stack>
  );
};
