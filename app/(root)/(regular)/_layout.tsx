import { ShakeEventExpo } from "@/lib/shake";
import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";

const Layout = () => {
  const router = useRouter();

  useEffect(() => {
    ShakeEventExpo.addListener(() => {
      router.push("/emergency");
    }, 7);

    return () => {
      ShakeEventExpo.removeListener();
    };
  }, [router]);

  return (
    <Stack initialRouteName="(tabs)">
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="find-ride" options={{ headerShown: false }} />
      <Stack.Screen
        name="confirm-ride"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="book-ride"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default Layout;
