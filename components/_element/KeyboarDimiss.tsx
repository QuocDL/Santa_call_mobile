import React from "react";
import { Platform } from "react-native";
import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  View,
  ViewProps,
} from "react-native";

interface KeyboardDismissWrapperProps extends ViewProps {
  children: React.ReactNode;
}

export default function KeyboardDismissWrapper({
  children,
}: KeyboardDismissWrapperProps) {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <>{children}</>
    </TouchableWithoutFeedback>
  );
}
