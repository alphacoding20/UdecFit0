import { View, StyleSheet, Text, ScrollView, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";

export default function biblioteca() {
  const categorias = [
    "Pecho",
    "Espalda",
    "Triceps",
    "Biceps",
    "Hombro",
    "Abdómen",
    "Antebrazo",
    "Trapecio",
    "Cuadriceps",
    "Femoral",
    "Glúteos",
    "Pantorrilla",
    "Aductores",
  ];

  return (
    <>
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          {categorias.map((categoria) => (
            <Link href={`/biblioteca/${categoria}`} key={categoria} asChild>
              <Pressable style={styles.card}>
                <Text style={styles.text}>{categoria}</Text>
              </Pressable>
            </Link>
          ))}
        </View>
      </ScrollView>

      <Pressable style={styles.addButton}>
        <Ionicons name="add-circle-sharp" size={90} color="black" />
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    //backgroundColor: "yellow",
  },
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    //backgroundColor: "red",
  },
  card: {
    backgroundColor: "palegreen",
    margin: 18,
    marginBottom: 0,
    width: "90%",
    height: 100,
    borderRadius: 10,
    padding: 20,
  },
  addButton: {
    position: "absolute",
    //backgroundColor: "yellow",
    width: 83,
    height: 83,
    bottom: 35,
    right: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
  },
});
