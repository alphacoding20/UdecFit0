import { View, StyleSheet, Text, ScrollView } from "react-native";
import { torsoPierna, ppl } from "./biblioteca/datos";

export default function rutinas() {
  const dias = prompt("Ingrese la cantidad de días a entrenar \n4\n6");
  let esquemaRutina = [];
  let detalleRutina: { dia: string; rutina: string[] }[] = [
    { dia: "Lunes", rutina: [] },
    { dia: "Martes", rutina: [] },
    { dia: "Miércoles", rutina: [] },
    { dia: "Jueves", rutina: [] },
    { dia: "Viernes", rutina: [] },
    { dia: "Sábado", rutina: [] },
    { dia: "Domingo", rutina: [] },
  ];

  switch (dias) {
    case "4":
      esquemaRutina = torsoPierna;
      detalleRutina[0].rutina = torsoPierna[0].rutina;
      detalleRutina[1].rutina = torsoPierna[1].rutina;
      detalleRutina[3].rutina = torsoPierna[2].rutina;
      detalleRutina[4].rutina = torsoPierna[3].rutina;
      console.log("Rutina torso-pierna:\n", esquemaRutina);
      console.log("Tu entrenamiento semanal:\n", detalleRutina);
      break;
    case "6":
      esquemaRutina = ppl;
      detalleRutina[0].rutina = ppl[0].rutina;
      detalleRutina[1].rutina = ppl[1].rutina;
      detalleRutina[2].rutina = ppl[2].rutina;
      detalleRutina[3].rutina = ppl[3].rutina;
      detalleRutina[4].rutina = ppl[4].rutina;
      detalleRutina[5].rutina = ppl[5].rutina;
      console.log("Rutina ppl:\n", esquemaRutina);
      console.log("Tu entrenamiento semanal:\n", detalleRutina);
      break;
    default:
      console.log("Valor no válido.");
  }

  return (
    <>
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <Text>Esta es la pantalla de rutinas</Text>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
