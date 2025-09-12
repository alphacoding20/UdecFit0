export type Ejercicio = {
  nombre: string;
  categoria: string;
  descripcion: string;
};

//EJERCICIOS

export const ejercicios: Ejercicio[] = [
  {
    nombre: "Press banca",
    categoria: "Pecho",
    descripcion: "...",
  },
  {
    nombre: "Press inclinado",
    categoria: "Pecho",
    descripcion: "no se",
  },
  {
    nombre: "Jalon al pecho",
    categoria: "Espalda",
    descripcion: "...",
  },
  {
    nombre: "Remo en polea",
    categoria: "Espalda",
    descripcion: "...",
  },
  {
    nombre: "Extensiones de codo en polea",
    categoria: "Triceps",
    descripcion: "...",
  },
  {
    nombre: "Curl tras nuca",
    categoria: "Triceps",
    descripcion: "..",
  },
  {
    nombre: "Curl de biceps",
    categoria: "Biceps",
    descripcion: "...",
  },
  {
    nombre: "Elevaciones laterales",
    categoria: "Hombro",
    descripcion: "...",
  },
  {
    nombre: "Press militar",
    categoria: "Hombro",
    descripcion: "...",
  },
  {
    nombre: "Peck deck invertido",
    categoria: "Hombro",
    descripcion: "...",
  },
  {
    nombre: "Crunch",
    categoria: "Abdómen",
    descripcion: "...",
  },
  {
    nombre: "Curl invertido",
    categoria: "Antebrazo",
    descripcion: "...",
  },
  {
    nombre: "Flexiones de muñeca",
    categoria: "Antebrazo",
    descripcion: "...",
  },
  {
    nombre: "Encogimientos de hombro",
    categoria: "Trapecio",
    descripcion: "...",
  },
  {
    nombre: "Prensa de pierna",
    categoria: "Cuadriceps",
    descripcion: "...",
  },
  {
    nombre: "Peso muerto rumano",
    categoria: "Femoral",
    descripcion: "...",
  },
  {
    nombre: "Hip thrust",
    categoria: "Glúteos",
    descripcion: "...",
  },
  {
    nombre: "Elevaciones de talón",
    categoria: "Pantorrilla",
    descripcion: "...",
  },
  {
    nombre: "Aductores en máquina",
    categoria: "Aductores",
    descripcion: "...",
  },
];

//RUTINAS

export const torsoPierna = [
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

export const ppl = [
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
