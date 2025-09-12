import { View, Text, StyleSheet } from "react-native";

export default function Cuenta() {
  return (
    <View style={styles.container}>
      <Text>Esta es la pantalla de cuenta</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
