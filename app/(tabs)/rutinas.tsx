//Imports
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import {
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { ppl, torsoPierna } from "./biblioteca/datos";

//Función principal
export default function Rutinas() {
  //Almacenamiento de rutinas
  let rutinasCreadas = [];
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
  const opcionesDias = [4, 6]; //Arreglo con los días de la semana a entrenar
  let diasSeleccionados = null;

  //Formulario para crear rutina usando componente Modal
  const [modalVisible, setModalVisible] = useState(false);

  //En caso de no haber rutinas
  if (rutinasCreadas.length === 0) {
    return (
      <>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.container}>
            <Text>Tus rutinas aparecerán aquí</Text>
          </View>
        </ScrollView>

        <Pressable
          style={styles.addButton}
          onPress={() => setModalVisible(true)}
        >
          <Ionicons name="add-circle-sharp" size={90} color="black" />
        </Pressable>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
          }}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalView}>
              <Text style={styles.modalTitle}>
                ¿Cuántos días a la semana quieres entrenar?
              </Text>
              {opcionesDias.map((dia) => (
                <Pressable
                  style={styles.modalButtons}
                  key={dia}
                  onPress={() => {
                    diasSeleccionados = dia;
                    console.log(diasSeleccionados);
                    switch (diasSeleccionados) {
                      case 4:
                        esquemaRutina = torsoPierna;
                        detalleRutina[0].rutina = torsoPierna[0].rutina;
                        detalleRutina[1].rutina = torsoPierna[1].rutina;
                        detalleRutina[3].rutina = torsoPierna[2].rutina;
                        detalleRutina[4].rutina = torsoPierna[3].rutina;
                        console.log("Rutina torso-pierna:\n", esquemaRutina);
                        console.log(
                          "Tu entrenamiento semanal:\n",
                          detalleRutina
                        );
                        break;
                      case 6:
                        esquemaRutina = ppl;
                        detalleRutina[0].rutina = ppl[0].rutina;
                        detalleRutina[1].rutina = ppl[1].rutina;
                        detalleRutina[2].rutina = ppl[2].rutina;
                        detalleRutina[3].rutina = ppl[3].rutina;
                        detalleRutina[4].rutina = ppl[4].rutina;
                        detalleRutina[5].rutina = ppl[5].rutina;
                        console.log("Rutina ppl:\n", esquemaRutina);
                        console.log(
                          "Tu entrenamiento semanal:\n",
                          detalleRutina
                        );
                        break;
                    }
                  }}
                >
                  <Text>{dia}</Text>
                </Pressable>
              ))}
            </View>
          </View>
        </Modal>
      </>
    );
  } else {
    return {};
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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

  //Estilos del Modal
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    //backgroundColor: "white",
  },
  modalView: {
    backgroundColor: "white",
  },
  modalTitle: {
    margin: 10,
  },
  modalButtons: {
    margin: 10,
    marginLeft: 20,
    marginBottom: 20,
  },
});
