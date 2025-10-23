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
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    // alignItems: "flex-start",
    // justifyContent: "flex-start",
    //backgroundColor: "red",
  },
  card: {
    backgroundColor: "#2C2C2C",
    width: "47%",
    height: 120,
    marginVertical: 10,
    marginHorizontal: 5,
    borderRadius: 15,
    padding: 15,
    justifyContent: "flex-end",

    //Sombra para Android
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,

    //Sombra para iOS
    elevation: 6,
  },
  text: {
    fontSize: 18,
    fontWeight: "700",
    color: "#FFFFFF",
  },
});
