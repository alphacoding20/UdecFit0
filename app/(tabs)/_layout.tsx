import { Tabs } from "expo-router";

import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function TabLayout() {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#76B82A",
          tabBarInactiveTintColor: "#A9A9A9",
          tabBarStyle: {
            backgroundColor: "#111111",
            borderTopColor: "#2C2C2C",
          },
          tabBarLabelStyle: {
            fontSize: 11,
          },
          headerStyle: {
            backgroundColor: "#111111",
          },
          headerTitleStyle: {
            color: "#FFFFFF",
          },
          headerShadowVisible: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => (
              <Ionicons name="home-sharp" color={color} size={24} />
            ),
          }}
        />
        <Tabs.Screen
          name="rutinas"
          options={{
            title: "Rutinas",
            tabBarIcon: ({ color }) => (
              <FontAwesome6 name="dumbbell" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="biblioteca"
          options={{
            title: "Ejercicios",
            headerTitle: "Grupos Musculares",
            tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons
                name="bookshelf"
                size={24}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="cuenta"
          options={{
            title: "Cuenta",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" size={24} color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
