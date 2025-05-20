import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack initialRouteName="(regular)">
      <Stack.Screen name="(regular)" options={{ headerShown: false }} />
      <Stack.Screen name="(emergency)" options={{ headerShown: false }} />
    </Stack>
  );
}
