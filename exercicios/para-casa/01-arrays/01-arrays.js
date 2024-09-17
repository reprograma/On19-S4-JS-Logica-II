// Imprima o que for pedido nos comentários
// ex: imprima o primeiro item da array
// console.log(arraysEx[0]);

const arrayExercicio = ["Banana", "Pera", "Uva", "Maça", "Figo", "Abacaxi", "Caviar"];

// Imprima o segundo item da array
console.log(arrayExercicio[1]);


// Imprima o último item da array
console.log(arrayExercicio[6]);

// Imprima o item do meio da array
console.log(arrayExercicio[3]);

// Imprima "Eu gosto mais de banana do que figo" usando a array no lugar das frutas
const Frase = "Eu gosto mais de banana do que figo"
const Alterado = Frase.replace(arrayExercicio, Frase)

console.log(Alterado)

// Imprima o item que não é uma fruta
console.log("O item", arrayExercicio[6], "não é fruta")