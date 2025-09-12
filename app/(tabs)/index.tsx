import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Hola. Bienvenidos a UdecFIT!</Text>
      <Link href="/(tabs)/rutinas">
        <Text style={{ color: "blue" }}>Ir a rutinas</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  texto: {
    color: "blue",
  },
});
