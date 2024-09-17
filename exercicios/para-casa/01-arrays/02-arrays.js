// Imprima o que for pedido nos comentários
// ex: imprima o primeiro item da array
// console.log(arraysEx[0]);

const arrayExercicio = [
  "banana",
  "pera",
  "uva",
  "maça",
  "figo",
  "abacaxi",
  "caviar"
];

// Imprima o terceiro item da array e a primeira letra maiúscula
console.log(arrayExercicio[2].replace("uva", "Uva"))

// Imprima o penúltimo item da array e a última letra maiúscula
console.log(arrayExercicio[5].replace("abacaxi", "abacaxI"))

// Imprima o item do meio da array e a primeira e a última letras maiúscula
console.log(arrayExercicio[3].replace("maça", "MaçA"))

// Imprima "Eu gosto mais de UVA do que fiGO" usando a array no lugar das frutas e observando as maiúsculas
const upperCase4 = arrayExercicio.map((item) => (item.replace("uva", "UVA").replace("figo", "fiGo")));
console.log(`\n Eu gosto mais de ${arrayExercicio[2].toUpperCase} do que ${arrayExercicio[4][0] + arrayExercicio[4][1] + arrayExercicio[4][2].toUpperCase + arrayExercicio[4][3].toUpperCase})`)
//const Frase = "Eu gosto mais de UVA do que fiGo"
//const Alterado = Frase.replace(arrayExercicio, Frase)

//console.log(Alterado)