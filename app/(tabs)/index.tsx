import images from "@/assets/images";
import { ImageBackground, Platform, Text, TextInput } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      <ImageBackground
        className="h-full w-full relative -z-[10]"
        resizeMode="stretch"
        source={images.bgImage}
      >
       
          <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TextInput placeholder="hehe" style={{ width: '80%', backgroundColor: 'white', padding: 10, borderRadius: 5 }} />
          </SafeAreaView>
      </ImageBackground>
    </SafeAreaProvider>
  );
}
