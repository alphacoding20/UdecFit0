// app/(tabs)/rutinas/[id].tsx - PLANTILLA PROVISIONAL

import { useGlobalSearchParams } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

// ⚠️ DATOS PROVISIONALES: Simula la información que buscarías
const DUMMY_RUTINA = {
  nombre: "TORSO-PIERNA (4 Días)",
  dias: 4,
  detalle: [
    {
      dia: "Lunes (Torso A)",
      rutina: [
        "Press banca",
        "Press militar",
        "Jalón al pecho",
        "Curl de bíceps",
        "Extensión de tríceps",
      ],
    },
    {
      dia: "Martes (Pierna A)",
      rutina: [
        "Sentadilla",
        "Peso muerto rumano",
        "Prensa de pierna",
        "Elevación de pantorrillas",
      ],
    },
    {
      dia: "Miércoles",
      rutina: [], // Día de descanso simulado
    },
    {
      dia: "Jueves (Torso B)",
      rutina: [
        "Press inclinado",
        "Remo en polea",
        "Peck Deck Invertido",
        "Elevaciones laterales",
        "Crunch",
      ],
    },
  ],
};

// ⚠️ Asegúrate de importar esto en el archivo real
type RutinaParams = { id: string };

export default function RutinaDetalleScreen() {
  // 1. Obtención del ID (Necesario aunque usemos datos dummy)
  const { id } = useGlobalSearchParams<RutinaParams>();

  // Simulación de la rutina encontrada
  const rutina = DUMMY_RUTINA;

  return (
    <ScrollView style={styles.container}>
      {/* -------------------- RESUMEN PRINCIPAL -------------------- */}
      <View style={styles.headerContainer}>
        <Text style={styles.title}>{rutina.nombre}</Text>
        <Text style={styles.subtitle}>ID: {id}</Text>
        <Text style={styles.subtitle}>{rutina.dias} Días de Entrenamiento</Text>
      </View>

      {/* -------------------- DETALLE DE ESQUEMA POR DÍA -------------------- */}
      <Text style={styles.sectionTitle}>Esquema de la Semana</Text>

      {rutina.detalle.map((diaInfo, index) => (
        <View key={index} style={styles.dayCard}>
          {/* Título del Día */}
          <Text style={styles.dayTitle}>{diaInfo.dia.toUpperCase()}</Text>

          {diaInfo.rutina.length > 0 ? (
            // Lista de Ejercicios
            diaInfo.rutina.map((ejercicio, idx) => (
              <View key={idx} style={styles.exerciseItem}>
                <Text style={styles.exerciseText}>• {ejercicio}</Text>
              </View>
            ))
          ) : (
            // Día de Descanso
            <Text style={styles.restText}>
              DÍA DE DESCANSO / DESCANSO ACTIVO
            </Text>
          )}
        </View>
      ))}

      {/* Pie de página (para asegurar el scroll) */}
      <View style={{ height: 50 }} />
    </ScrollView>
  );
}

// ----------------------------------------------------
// ESTILOS PROVISIONALES
// ----------------------------------------------------

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f0f4f8", // Fondo suave
  },
  headerContainer: {
    marginBottom: 25,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingBottom: 15,
  },
  title: {
    fontSize: 26,
    fontWeight: "900",
    color: "#2c3e50",
  },
  subtitle: {
    fontSize: 16,
    color: "#7f8c8d",
    marginTop: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#34495e",
    marginBottom: 15,
  },
  dayCard: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    // Sombra suave para efecto de tarjeta
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  dayTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2980b9",
    borderBottomWidth: 1,
    borderBottomColor: "#ecf0f1",
    paddingBottom: 5,
    marginBottom: 10,
  },
  exerciseItem: {
    paddingVertical: 5,
    borderLeftWidth: 3,
    borderLeftColor: "#2ecc71",
    paddingLeft: 10,
    marginLeft: 5,
  },
  exerciseText: {
    fontSize: 16,
    color: "#333",
  },
  restText: {
    fontSize: 16,
    fontStyle: "italic",
    color: "#e74c3c",
    textAlign: "center",
    paddingVertical: 10,
  },
});
