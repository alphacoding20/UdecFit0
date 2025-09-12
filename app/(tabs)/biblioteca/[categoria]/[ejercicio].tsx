import { View, Text } from "react-native";
import { useGlobalSearchParams } from "expo-router/build/hooks";

import { ejercicios } from "../datos";

export default function DetalleEjercicio() {
  const { ejercicio } = useGlobalSearchParams();

  const ejercicioSelec = ejercicios.find(
    (ej) =>
      ej.nombre.toLowerCase() === (ejercicio as string)?.toLocaleLowerCase()
  );

  return (
    <View>
      <Text>Nombre: {ejercicioSelec?.nombre}</Text>
      <Text>Categoria: {ejercicioSelec?.categoria}</Text>
      <Text>Descripción: {ejercicioSelec?.descripcion}</Text>
    </View>
  );
}
