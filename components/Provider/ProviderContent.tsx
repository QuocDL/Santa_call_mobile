import React, { useRef, useState } from "react";
import {
  ScrollView,
  View,
  NativeSyntheticEvent,
  NativeScrollEvent,
  ActivityIndicator,
} from "react-native";
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
  overflowBottom = { enable: false },
  styleScroll,
  classNameScroll,
  showScrollBarY = true,
  showScrollBarX = true,
  styleImageBg,
  enablePullToRefresh = false,
}: {
  children: React.ReactNode;
  overflowBottom?: { enable: boolean; heigth?: number };
  backgroundImage: ImageSourcePropType;
  viewScroll: ScrollType;
  styleScroll?: StyleProp<ViewStyle>;
  classNameScroll?: string;
  showScrollBarY?: boolean;
  showScrollBarX?: boolean;
  styleImageBg?: StyleProp<ViewStyle>;
  enablePullToRefresh?: boolean;
}) {
  const childArray = React.Children.toArray(children);
  const [refreshing, setRefreshing] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);
  const scrollY = useRef(0);

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      setReloadKey((prevKey) => prevKey + 1);
    }, 1500);
  };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { contentOffset } = event.nativeEvent;
    scrollY.current = contentOffset.y;
    if (enablePullToRefresh && scrollY.current < -100 && !refreshing) {
      handleRefresh();
    }
  };

  return (
    <SafeAreaProvider>
      <ImageBackground
        style={styleImageBg}
        className="h-full w-full relative -z-[10]"
        resizeMode="stretch"
        source={backgroundImage}
      >
        <SafeAreaView key={reloadKey}>
          {viewScroll === "flatlist" ? (
            <FlatList
              data={[
                refreshing && (
                  <ActivityIndicator key="loading" size="large" color="white" />
                ),
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
              onScroll={handleScroll}
              onScrollEndDrag={handleScroll}
            />
          ) : viewScroll === "scrollview" ? (
            <ScrollView
              showsHorizontalScrollIndicator={showScrollBarX}
              showsVerticalScrollIndicator={showScrollBarY}
              style={styleScroll}
              className={classNameScroll}
              onScroll={handleScroll}
              onScrollEndDrag={handleScroll}
            >
              {refreshing && (
                <ActivityIndicator
                  size="large"
                  color="white"
                  style={{ marginVertical: 10 }}
                />
              )}
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
