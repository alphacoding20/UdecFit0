import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Cuenta() {
  return (
    <ScrollView contentContainerStyle={styles.scrollVacio}>
      <View style={styles.container}>
        <Text>Esta es la pantalla de cuenta</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
  scrollVacio: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
