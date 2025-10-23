//Imports
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
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
import {
  fullBody,
  ppl,
  torsoPierna,
  torsoPierna_ppl,
} from "../biblioteca/datos";

//Este tipe sirve para especificar lo que hay que pasar al crear la rutina
type Rutina = {
  id: string;
  nombre: string;
  dias: number;
  esquemaId: string;
  esquema: any[];
  detalle: any[];
};

//Función principal
export default function Rutinas() {
  //Inicialización del router (este hook sirve para navegar entre pantallas)
  const router = useRouter();

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
  const opcionesDias = [3, 4, 5, 6]; //Arreglo con los días de la semana a entrenar

  //Variables de estado para crear el Modal
  const [modalVisible, setModalVisible] = useState(false);

  //FUNCIONES CREACIÓN DE RUTINA
  //Función de selección de días al elegir una opción
  const seleccionDias = (dias: number) => {
    switch (dias) {
      case 3:
        //esquemaId = "fullBody";
        esquemaRutina = fullBody;
        detalleRutina[0].rutina = fullBody[0].rutina;
        detalleRutina[1].rutina = fullBody[1].rutina;
        detalleRutina[2].rutina = fullBody[2].rutina;
        const nuevoId3 = uuidv4();
        const rutina3Dias: Rutina = {
          id: nuevoId3,
          nombre: "FULLBODY",
          dias: 3,
          esquemaId: "fullBody",
          esquema: esquemaRutina,
          detalle: detalleRutina,
        };
        setRutinasCreadas((prevRutinas) => [...prevRutinas, rutina3Dias]);
        break;
      case 4:
        esquemaRutina = torsoPierna;
        detalleRutina[0].rutina = torsoPierna[0].rutina;
        detalleRutina[1].rutina = torsoPierna[1].rutina;
        detalleRutina[2].rutina = torsoPierna[2].rutina;
        detalleRutina[3].rutina = torsoPierna[3].rutina;
        const nuevoId4 = uuidv4();
        const rutina4Dias: Rutina = {
          id: nuevoId4,
          nombre: "TORSO-PIERNA",
          dias: 4,
          esquemaId: "torsoPierna",
          esquema: esquemaRutina,
          detalle: detalleRutina,
        };
        setRutinasCreadas((prevRutinas) => [...prevRutinas, rutina4Dias]);
        break;
      case 5:
        esquemaRutina = torsoPierna_ppl;
        detalleRutina[0].rutina = torsoPierna_ppl[0].rutina;
        detalleRutina[1].rutina = torsoPierna_ppl[1].rutina;
        detalleRutina[2].rutina = torsoPierna_ppl[2].rutina;
        detalleRutina[3].rutina = torsoPierna_ppl[3].rutina;
        detalleRutina[4].rutina = torsoPierna_ppl[4].rutina;
        const nuevoId5 = uuidv4();
        const rutina5Dias: Rutina = {
          id: nuevoId5,
          nombre: "TORSO-PIERNA/PPL ",
          dias: 5,
          esquemaId: "torsoPierna_ppl",
          esquema: esquemaRutina,
          detalle: detalleRutina,
        };
        setRutinasCreadas((prevRutinas) => [...prevRutinas, rutina5Dias]);
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
          nombre: "PPL",
          dias: 6,
          esquemaId: "ppl",
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
            <View style={styles.container} key={rutina.id}>
              <Pressable
                style={styles.card}
                onPress={() =>
                  router.push({
                    pathname: `/rutinas/${rutina.id}` as any,
                    params: { id: rutina.id, esquema: rutina.esquemaId },
                  })
                }
              >
                <Text style={styles.cardTitle}>{rutina.nombre}</Text>
                <Text style={styles.cardText}>{rutina.dias} dias</Text>
              </Pressable>
            </View>
          ))
        ) : (
          <View style={styles.containerVacio}>
            <Text style={styles.textoContainerVacio}>
              Aquí puedes ver tus rutinas
            </Text>
          </View>
        )}
      </ScrollView>

      <Pressable style={styles.addButton} onPress={() => setModalVisible(true)}>
        <Ionicons name="add-circle-sharp" size={90} color="#76B82A" />
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
                <Text style={styles.modalButtonText}>{dias}</Text>
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
    backgroundColor: "#111111",
  },
  scrollVacio: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#111111",
  },
  container: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  containerVacio: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  textoContainerVacio: {
    color: "#A9A9A9",
    fontSize: 18,
  },
  addButton: {
    position: "absolute",
    // backgroundColor: "#007AFF",
    // width: 85,
    // height: 85,
    // borderRadius: 42.5,
    bottom: 30,
    right: 20,
    alignItems: "center",
    justifyContent: "center",

    //Sombra IOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 8,

    //Sombra Android
    elevation: 12,
  },

  //Estilos del Modal
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 25,
    width: "80%",
    alignItems: "center",
  },
  modalTitle: {
    marginBottom: 20,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#1A1A1A",
  },
  modalButtons: {
    backgroundColor: "#E0E0E0",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    marginVertical: 8,
    alignItems: "center",
  },
  modalButtonText: {},
  //Estilos rutinas
  card: {
    backgroundColor: "#2C2C2C",
    marginHorizontal: 20,
    marginTop: 20,
    width: "90%",
    height: 120,
    borderRadius: 15,

    //Sombra IOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,

    //Sombra Android
    elevation: 8,

    padding: 20,
    justifyContent: "center",
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#FFFFFF",
    marginBottom: 5,
  },
  cardText: {
    fontSize: 16,
    fontWeight: "500",
    //color: "#007AFF",
    color: "#76B82A",
  },
});
