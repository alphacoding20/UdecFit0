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
import { v4 as uuidv4 } from "uuid";
import { ppl, torsoPierna } from "./biblioteca/datos";

//Este tipe sirve para especificar lo que hay que pasar al crear la rutina
type Rutina = {
  id: string;
  nombre: string;
  dias: number;
  esquema: any[];
  detalle: any[];
};

//Función principal
export default function Rutinas() {
  //Almacenamiento de rutinas
  const [rutinasCreadas, setRutinasCreadas] = useState<Rutina[]>([]);
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

  //Variables de estado para crear el Modal
  const [modalVisible, setModalVisible] = useState(false);

  //FUNCIONES CREACIÓN DE RUTINA
  //Función de selección de días al elegir una opción
  const seleccionDias = (dias: number) => {
    switch (dias) {
      case 4:
        esquemaRutina = torsoPierna;
        detalleRutina[0].rutina = torsoPierna[0].rutina;
        detalleRutina[1].rutina = torsoPierna[1].rutina;
        detalleRutina[3].rutina = torsoPierna[2].rutina;
        detalleRutina[4].rutina = torsoPierna[3].rutina;
        const nuevoId4 = uuidv4();
        const rutina4Dias: Rutina = {
          id: nuevoId4,
          nombre: "TORSO-PIERNA",
          dias: 4,
          esquema: esquemaRutina,
          detalle: detalleRutina,
        };
        setRutinasCreadas((prevRutinas) => [...prevRutinas, rutina4Dias]);
        break;
      case 6:
        esquemaRutina = ppl;
        detalleRutina[0].rutina = ppl[0].rutina;
        detalleRutina[1].rutina = ppl[1].rutina;
        detalleRutina[2].rutina = ppl[2].rutina;
        detalleRutina[3].rutina = ppl[3].rutina;
        detalleRutina[4].rutina = ppl[4].rutina;
        detalleRutina[5].rutina = ppl[5].rutina;
        const nuevoId6 = uuidv4();
        const rutina6Dias: Rutina = {
          id: nuevoId6,
          nombre: "EMPUJE/JALE/PIERNA",
          dias: 6,
          esquema: esquemaRutina,
          detalle: detalleRutina,
        };
        setRutinasCreadas((prevRutinas) => [...prevRutinas, rutina6Dias]);
        break;
    }
    setModalVisible(false);
  };

  return (
    <>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={
          rutinasCreadas.length === 0 ? styles.scrollVacio : undefined
        }
      >
        {rutinasCreadas.length > 0 ? (
          rutinasCreadas.map((rutina) => (
            <>
              <View style={styles.container}>
                <Pressable style={styles.card} key={rutina.id}>
                  <Text style={styles.cardTitle}>{rutina.nombre}</Text>
                  <Text style={styles.cardText}>{rutina.dias}dias</Text>
                </Pressable>
              </View>
            </>
          ))
        ) : (
          <>
            <View style={styles.containerVacio}>
              <Text>Aquí puedes ver tus rutinas</Text>
            </View>
          </>
        )}
      </ScrollView>

      <Pressable style={styles.addButton} onPress={() => setModalVisible(true)}>
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
            {opcionesDias.map((dias) => (
              <Pressable
                style={styles.modalButtons}
                key={dias}
                onPress={() => seleccionDias(dias)}
              >
                <Text>{dias}</Text>
              </Pressable>
            ))}
          </View>
        </View>
      </Modal>
    </>
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
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  containerVacio: {
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

  //Estilos rutinas
  card: {
    backgroundColor: "#807d7d",
    margin: 18,
    marginBottom: 0,
    width: "90%",
    height: 100,
    borderRadius: 10,
    padding: 20,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  cardText: {
    fontSize: 20,
  },
});
