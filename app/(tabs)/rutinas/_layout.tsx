import { Stack } from "expo-router";

export default function RutinasStackLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerTitle: "Mis Rutinas" }} />
      <Stack.Screen
        name="[id]"
        options={{ headerTitle: "Detalle de Rutina" }}
      />
    </Stack>
  );
}
