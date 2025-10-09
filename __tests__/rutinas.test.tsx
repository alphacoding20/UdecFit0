import { fireEvent, render, waitFor } from "@testing-library/react-native";
import React from "react";
import Rutinas from "../app/(tabs)/rutinas";

// Mock de Ionicons (para que Jest no falle al renderizar íconos)
jest.mock("@expo/vector-icons/Ionicons", () => {
  return {
    __esModule: true,
    default: () => <></>,
  };
});

// Mock de los datos importados (para evitar dependencias del archivo datos.ts)
jest.mock("../app/(tabs)/biblioteca/datos", () => ({
  fullBody: [
    { rutina: ["Sentadillas", "Press banca", "Remo"] },
    { rutina: ["Zancadas", "Press hombros", "Dominadas"] },
    { rutina: ["Peso muerto", "Curl bíceps", "Extensión tríceps"] },
  ],
  torsoPierna: [
    { rutina: ["Press banca", "Dominadas"] },
    { rutina: ["Sentadillas", "Peso muerto"] },
    { rutina: ["Press militar", "Curl bíceps"] },
    { rutina: ["Extensión de piernas", "Fondos"] },
  ],
  ppl: [
    { rutina: ["Press banca"] },
    { rutina: ["Peso muerto"] },
    { rutina: ["Sentadilla"] },
    { rutina: ["Remo"] },
    { rutina: ["Press militar"] },
    { rutina: ["Curl bíceps"] },
  ],
  torsoPierna_ppl: [
    { rutina: ["Press banca"] },
    { rutina: ["Sentadilla"] },
    { rutina: ["Peso muerto"] },
    { rutina: ["Dominadas"] },
    { rutina: ["Curl bíceps"] },
  ],
}));

describe("Pantalla de Rutinas", () => {
  it("debe renderizar correctamente el texto inicial", () => {
    const { getByText } = render(<Rutinas />);
    expect(getByText("Aquí puedes ver tus rutinas")).toBeTruthy();
  });

  it("debe abrir el modal al presionar el botón +", async () => {
    const { getByText, getByRole } = render(<Rutinas />);
    const addButton = getByRole("button");
    fireEvent.press(addButton);

    await waitFor(() => {
      expect(
        getByText("¿Cuántos días a la semana quieres entrenar?")
      ).toBeTruthy();
    });
  });

  it("debe crear una rutina al seleccionar 3 días", async () => {
    const { getByRole, getByText, queryByText } = render(<Rutinas />);
    const addButton = getByRole("button");
    fireEvent.press(addButton);

    const boton3dias = getByText("3");
    fireEvent.press(boton3dias);

    await waitFor(() => {
      expect(queryByText("FULLBODY")).toBeTruthy();
    });
  });
});
