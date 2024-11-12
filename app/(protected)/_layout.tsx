import { Stack, useRouter } from "expo-router";

export default () => {
  const router = useRouter();
  return (
    <Stack>
      <Stack.Screen name="swap" options={{headerShown: false}}/>
      <Stack.Screen name="products" options={{headerShown: false}}/>
    </Stack>
  );
};
