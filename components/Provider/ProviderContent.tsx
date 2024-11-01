import { useQueryClient } from "@tanstack/react-query";
import React, { useCallback, useRef, useState, useMemo } from "react";
import {
  ScrollView,
  View,
  NativeSyntheticEvent,
  NativeScrollEvent,
  ActivityIndicator,
  RefreshControl, // Thêm import RefreshControl
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
  queryKey,
  enablePullToRefresh = false,
}: {
  children: React.ReactNode;
  overflowBottom?: { enable: boolean; height?: number };
  backgroundImage: ImageSourcePropType;
  viewScroll: ScrollType;
  queryKey?: string[];
  styleScroll?: StyleProp<ViewStyle>;
  classNameScroll?: string;
  showScrollBarY?: boolean;
  showScrollBarX?: boolean;
  styleImageBg?: StyleProp<ViewStyle>;
  enablePullToRefresh?: boolean;
}) {
  const childArray = React.Children.toArray(children).filter(Boolean);
  const [refreshing, setRefreshing] = useState(false);
  const queryClient = useQueryClient();
  const handleRefresh = useCallback(async () => {
    setRefreshing((prevRefreshing) => {
      if (prevRefreshing) return prevRefreshing;
      return true;
    });
  
    try {
      if (queryKey && Array.isArray(queryKey)) {
        await Promise.all(
          queryKey.map((key) => queryClient.invalidateQueries({ queryKey: [key] }))
        );
      }
      await new Promise((resolve) => setTimeout(resolve, 1500));
    } finally {
      setRefreshing(false);
    }
  }, [queryClient, queryKey]);
  const renderedChildren = useMemo(() => {
    const childrenArray = [
      ...childArray,
      overflowBottom.enable && (
        <View
          key={`spacer-${childArray.length}`}
          style={{ height: overflowBottom.height }}
        />
      ),
    ].filter(Boolean);
    return childrenArray;
  }, [overflowBottom, childArray]);

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
              data={renderedChildren}
              renderItem={({ item }) => <>{item}</>}
              keyExtractor={(item, index) => index.toString()}
              showsHorizontalScrollIndicator={showScrollBarX}
              showsVerticalScrollIndicator={showScrollBarY}
              style={styleScroll}
              className={classNameScroll}
              refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={handleRefresh}
                />
              }
            />
          ) : viewScroll === "scrollview" ? (
            <ScrollView
              showsHorizontalScrollIndicator={showScrollBarX}
              showsVerticalScrollIndicator={showScrollBarY}
              style={styleScroll}
              className={classNameScroll}
              refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={handleRefresh}
                />
              }
            >
              {renderedChildren}
            </ScrollView>
          ) : (
            renderedChildren
          )}
        </SafeAreaView>
      </ImageBackground>
    </SafeAreaProvider>
  );
}
