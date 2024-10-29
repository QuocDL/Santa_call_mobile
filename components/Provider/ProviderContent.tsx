import React, { useEffect, useRef } from "react";
import { ScrollView, View } from "react-native";
import {
  ImageBackground,
  ImageSourcePropType,
  FlatList,
  StyleProp,
  ViewStyle,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

type ScrollType = "flatlist" | "scrollview" | "none";

export default function ProviderContent({
  children,
  backgroundImage,
  viewScroll,
  overflowBottom = {
    enable: false,
  },
  styleScroll,
  classNameScroll,
  showScrollBarY = true,
  showScrollBarX = true,
  styleImageBg,
}: {
  children: React.ReactNode;
  overflowBottom?: {
    enable: boolean;
    heigth?: number;
  };
  backgroundImage: ImageSourcePropType;
  viewScroll: ScrollType;
  styleScroll?: StyleProp<ViewStyle>;
  classNameScroll?: string;
  showScrollBarY?: boolean;
  showScrollBarX?: boolean;
  styleImageBg?: StyleProp<ViewStyle>;
}) {
  const childArray = React.Children.toArray(children);

  return (
    <SafeAreaProvider>
      <ImageBackground
        style={styleImageBg}
        className="h-full w-full relative -z-[10]"
        resizeMode="stretch"
        source={backgroundImage}
      >
        <SafeAreaView>
          {viewScroll === "flatlist" ? (
            <FlatList
              data={[
                ...childArray,
                overflowBottom && overflowBottom.enable && (
                  <View
                    key={`spacer-${childArray.length}`}
                    style={{ height: overflowBottom.heigth }}
                  />
                ),
              ]}
              renderItem={({ item }) => <>{item}</>}
              keyExtractor={(item, index) => index.toString()}
              showsHorizontalScrollIndicator={showScrollBarX}
              showsVerticalScrollIndicator={showScrollBarY}
              style={styleScroll}
              className={classNameScroll}
            />
          ) : viewScroll === "scrollview" ? (
            <ScrollView
              showsHorizontalScrollIndicator={showScrollBarX}
              showsVerticalScrollIndicator={showScrollBarY}
              style={styleScroll}
              className={classNameScroll}
            >
              {children}
              {overflowBottom && overflowBottom.enable && (
                <View style={{ height: overflowBottom.heigth }} />
              )}
            </ScrollView>
          ) : (
            <>
              {children}
              {overflowBottom && overflowBottom.enable && (
                <View style={{ height: overflowBottom.heigth }} />
              )}
            </>
          )}
        </SafeAreaView>
      </ImageBackground>
    </SafeAreaProvider>
  );
}
