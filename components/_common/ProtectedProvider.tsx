import { Redirect } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function ProtectedProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const isLogged = true;
  if (!isLogged)
    return (
      <View>
        <Text className="text-white">You need login first</Text>
      </View>
    );
  return <>{children}</>;
}
