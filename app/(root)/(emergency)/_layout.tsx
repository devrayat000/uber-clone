import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="emergency" options={{ headerShown: false }} />
    </Stack>
  );
}
