import { Stack } from "expo-router";

export default function LibraryLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="[categoria]"
        options={{
          title: "Ejercicios",
        }}
      />
      <Stack.Screen
        name="[categoria]/[ejercicio]"
        options={{ title: "Detalle del ejercicio" }}
      />
    </Stack>
  );
}
