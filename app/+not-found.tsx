import { View, StyleSheet } from "react-native";
import { Stack, Link } from "expo-router";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Ups. Página no encontrada" }} />
      <View style={styles.container}>
        <Link href="./" style={styles.button}>
          Volver a la pantalla inicial
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },
});
