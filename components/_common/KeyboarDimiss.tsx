import React from 'react';
import { Keyboard, TouchableWithoutFeedback, View, ViewProps } from 'react-native';

interface KeyboardDismissWrapperProps extends ViewProps {
  children: React.ReactNode;
}

export default function KeyboardDismissWrapper({
  children,
  ...props
}: KeyboardDismissWrapperProps) {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View {...props}>{children}</View>
    </TouchableWithoutFeedback>
  );
}
