import images from "@/assets/images";
import { ImageBackground, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      <ImageBackground
        className="h-full w-full"
        resizeMode="cover"
        source={images.bgImage}
      >
        <SafeAreaView>
          <Text>Welcome to my app!</Text>
        </SafeAreaView>
      </ImageBackground>
    </SafeAreaProvider>
  );
}
