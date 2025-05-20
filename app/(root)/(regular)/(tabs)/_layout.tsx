import { Tabs } from "expo-router";
import { Image, ImageSourcePropType, View } from "react-native";

import { icons } from "@/constants";

const TabIcon = ({
  source,
  focused,
  size,
}: {
  source: ImageSourcePropType;
  focused: boolean;
  size: number;
}) => (
  <View className={`rounded-full`}>
    <View
      className={`rounded-full overflow-hidden items-center justify-center ${focused ? "bg-general-400" : ""}`}
      style={{
        width: (size * 6) / 3,
        height: (size * 6) / 3,
      }}
    >
      <Image
        source={source}
        tintColor="white"
        resizeMode="contain"
        style={{
          width: size,
          height: size,
        }}
      />
    </View>
  </View>
);

export default function Layout() {
  return (
    <Tabs
      initialRouteName="home"
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "white",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#333333",
          borderRadius: 50,
          paddingHorizontal: 0, // ios only
          overflow: "hidden",
          marginHorizontal: 20,
          marginBottom: 20,
          height: 78,
        },
        tabBarItemStyle: { flex: 1 },
        tabBarIconStyle: {
          flex: 1,
          display: "flex",
          alignItems: "center",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused, size }) => (
            <TabIcon source={icons.home} focused={focused} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="rides"
        options={{
          title: "Rides",
          headerShown: false,
          tabBarIcon: ({ focused, size }) => (
            <TabIcon source={icons.list} focused={focused} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: "Chat",
          headerShown: false,
          tabBarIcon: ({ focused, size }) => (
            <TabIcon source={icons.chat} focused={focused} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused, size }) => (
            <TabIcon source={icons.profile} focused={focused} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
