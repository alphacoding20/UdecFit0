import { Link } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

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
    </>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: "#111111",
  },
  container: {
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
  text: {
    fontSize: 20,
  },
});
