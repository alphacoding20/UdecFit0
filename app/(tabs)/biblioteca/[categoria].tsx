import { Link, useGlobalSearchParams } from "expo-router";
import { FlatList, Pressable, StyleSheet, Text } from "react-native";

import { ejercicios } from "./datos";

export default function PantallaEjercicios() {
  const { categoria } = useGlobalSearchParams();

  const ejerciciosCategoria = ejercicios.filter(
    (ejercicio) =>
      ejercicio.categoria.toLowerCase() ===
      (categoria as string)?.toLocaleLowerCase()
  );

  return (
    <FlatList
      style={styles.listContainer}
      contentContainerStyle={styles.contentContainer}
      data={ejerciciosCategoria}
      keyExtractor={(item) => item.nombre}
      renderItem={({ item }) => (
        <Link href={`/biblioteca/${categoria}/${item.nombre}`} asChild>
          <Pressable style={styles.card}>
            <Text style={styles.text}>{item.nombre}</Text>
          </Pressable>
        </Link>
      )}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    backgroundColor: "#111111",
  },
  contentContainer: {
    paddingVertical: 12,
  },
  card: {
    backgroundColor: "#2C2C2C",
    marginHorizontal: 20,
    marginVertical: 8,
    height: 80, //
    borderRadius: 10,
    padding: 20,
    justifyContent: "center",

    // Sombra Android
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    // Sombra iOS
    elevation: 4,
  },
  text: {
    fontSize: 18,
    fontWeight: "600",
    color: "#FFFFFF",
  },
});
