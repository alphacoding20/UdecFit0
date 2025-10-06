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
  card: {
    backgroundColor: "#FDFD96",
    margin: 18,
    marginBottom: 0,
    width: "90%",
    height: 100,
    borderRadius: 10,
    padding: 20,
  },
  text: {
    fontSize: 20,
  },
});
