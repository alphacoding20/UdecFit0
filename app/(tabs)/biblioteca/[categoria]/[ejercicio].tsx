// import { useGlobalSearchParams } from "expo-router/build/hooks";
import { ScrollView, StyleSheet, Text, View } from "react-native";

// import { ejercicios } from "../datos";

const ejercicioDetalle = {
  nombre: "Press de Banca con Mancuernas",
  musculoPrincipal: "Pecho",
  dificultad: "Intermedio",
  equipo: "Mancuernas, Banco",
  instrucciones:
    "Acuéstese en un banco, sostenga las mancuernas al nivel del pecho. Empuje hacia arriba hasta extender los brazos. Baje lentamente de forma controlada.",
};

export default function DetalleEjercicio() {
  // const { ejercicio } = useGlobalSearchParams();

  // const ejercicioSelec = ejercicios.find(
  //   (ej) =>
  //     ej.nombre.toLowerCase() === (ejercicio as string)?.toLocaleLowerCase()
  // );

  const datos = ejercicioDetalle;

  return (
    <ScrollView style={styles.container}>
      {/*CONTENEDOR DE IMÁGENES*/}
      <View style={styles.imagePlaceholder}>
        <Text style={styles.imageText}>[Video/Imagen aquí]</Text>
      </View>

      <View style={styles.contentArea}>
        {/*ENCABEZADO*/}
        <Text style={styles.title}>{datos.nombre}</Text>

        {/*ETIQUETAS*/}
        <View style={styles.metadataContainer}>
          <View style={styles.tag}>
            <Text style={styles.tagText}>
              Músculo: {datos.musculoPrincipal}
            </Text>
          </View>
          <View style={[styles.tag, styles.tagAccent]}>
            <Text style={styles.tagTextAccent}>
              Dificultad: {datos.dificultad}
            </Text>
          </View>
        </View>

        {/*INSTRUCCIONES*/}
        <Text style={styles.sectionTitle}>Instrucciones</Text>
        <Text style={styles.instructionsText}>{datos.instrucciones}</Text>
      </View>
    </ScrollView>
  );
}

const UdeC_GREEN = "#76B82A";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111111",
  },

  //IMAGENES
  imagePlaceholder: {
    height: 250,
    backgroundColor: "#2C2C2C",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  imageText: {
    color: "#A9A9A9",
    fontSize: 16,
  },

  //ENCABEZADO Y ETIQUETAS
  contentArea: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 10,
  },
  metadataContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 25,
  },
  tag: {
    backgroundColor: "#2C2C2C",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#444444",
  },
  tagText: {
    color: "#FFFFFF",
    fontSize: 14,
  },
  tagAccent: {
    backgroundColor: UdeC_GREEN,
    borderColor: UdeC_GREEN,
  },
  tagTextAccent: {
    color: "#111111",
    fontWeight: "bold",
    fontSize: 14,
  },

  //INSTRUCCIONES
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginTop: 10,
    marginBottom: 10,
  },
  instructionsText: {
    fontSize: 16,
    color: "#A9A9A9",
    lineHeight: 24,
    marginBottom: 20,
  },
});
