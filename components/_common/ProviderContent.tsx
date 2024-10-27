import {
  ImageBackground,
  ImageSourcePropType,
  ScrollView,
  StyleProp,
  ViewStyle,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function ProviderContent({
  children,
  backgroundImage,
  enableScroll,
  styleScroll,
  classNameScroll,
  styleImageBg,
}: {
  children: React.ReactNode;
  backgroundImage: ImageSourcePropType;
  enableScroll: boolean;
  styleScroll?: StyleProp<ViewStyle>;
  classNameScroll?: string;
  styleImageBg?: StyleProp<ViewStyle>;
}) {
  return (
    <SafeAreaProvider>
      <ImageBackground
        style={styleImageBg}
        className="h-full w-full relative -z-[10]"
        resizeMode="stretch"
        source={backgroundImage}
      >
        <SafeAreaView>
          {enableScroll ? (
            <ScrollView style={styleScroll} className={classNameScroll}>{children}</ScrollView>
          ) : (
            <>{children}</>
          )}
        </SafeAreaView>
      </ImageBackground>
    </SafeAreaProvider>
  );
}
