//Esquemas
export let torsoPierna = [
  {
    dia: 1,
    rutina: [
      "Press banca",
      "Press militar",
      "Jalón al pecho",
      "Extensiones de codo",
      "Curl de biceps",
      "Elevaciones laterales",
    ],
  },
  {
    dia: 2,
    rutina: [
      "Prensa inclinada",
      "Peso muerto rumano",
      "Hip Thrust",
      "Extensiones de pierna",
      "Curl acostado",
      "Elevaciones de talón",
    ],
  },
  {
    dia: 3,
    rutina: [
      "Press banca",
      "Press militar",
      "Jalón al pecho",
      "Extensiones de codo",
      "Curl de biceps",
      "Elevaciones laterales",
    ],
  },
  {
    dia: 4,
    rutina: [
      "Prensa inclinada",
      "Peso muerto rumano",
      "Hip Thrust",
      "Extensiones de pierna",
      "Curl acostado",
      "Elevaciones de talón",
    ],
  },
];

let ppl = [
  {
    dia: 1,
    rutina: [
      "Press banca",
      "Press militar",
      "Elevaciones laterales",
      "Extensiones de codo",
      "Encogimientos de hombro",
      "Press inclinado",
    ],
  },
  {
    dia: 2,
    rutina: [
      "Jalón al pecho",
      "Remo en polea baja",
      "Curl inclinado",
      "Curl predicador",
      "Peck deck invertido",
      "Curl invertido",
    ],
  },
  {
    dia: 3,
    rutina: [
      "Prensa inclinada",
      "Peso muerto rumano",
      "Hip Thrust",
      "Extensiones de pierna",
      "Curl acostado",
      "Elevaciones de talón",
    ],
  },
  {
    dia: 4,
    rutina: [
      "Press banca",
      "Press militar",
      "Elevaciones laterales",
      "Extensiones de codo",
      "Encogimientos de hombro",
      "Press inclinado",
    ],
  },
  {
    dia: 5,
    rutina: [
      "Jalón al pecho",
      "Remo en polea baja",
      "Curl inclinado",
      "Curl predicador",
      "Peck deck invertido",
      "Curl invertido",
    ],
  },
  {
    dia: 6,
    rutina: [
      "Prensa inclinada",
      "Peso muerto rumano",
      "Hip Thrust",
      "Extensiones de pierna",
      "Curl acostado",
      "Elevaciones de talón",
    ],
  },
];

//Logica
const dias = prompt("Ingrese la cantidad de días a entrenar \n4\n6");
let esquemaRutina = [];
let detalleRutina = [
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
