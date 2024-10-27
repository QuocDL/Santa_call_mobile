import images from "@/assets/images";
import TabBarMenu from "@/components/TabBarMenu";
import { ImageBackground, Platform, ScrollView, Text, TextInput } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      <ImageBackground
        className="h-full w-full relative -z-[10]"
        resizeMode="stretch"
        source={images.bgImage}
      >
       
          <SafeAreaView>
            <ScrollView className="min-h-screen ">
               <TabBarMenu/>
            </ScrollView>
          </SafeAreaView>
      </ImageBackground>
    </SafeAreaProvider>
  );
}
