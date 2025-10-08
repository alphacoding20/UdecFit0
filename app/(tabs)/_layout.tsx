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
          tabBarStyle: {
            backgroundColor: "white",
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
            headerTitle: "Biblioteca de ejercicios",
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
