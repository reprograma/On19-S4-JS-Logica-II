// usando map, converta todas os itens da array para primeira letra maiúscula
const arrayExercicio = [
  "banana",
  "pera",
  "uva",
  "maça",
  "figo",
  "abacaxi",
  "caviar"
];

const arrayExercicio2 = arrayExercicio.map( arrayExercicio => arrayExercicio[0].toUpperCase()+arrayExercicio.slice(1));
console.log("Resposta: ", arrayExercicio2);