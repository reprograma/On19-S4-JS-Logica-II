// usando map, adicione um número sequencial para cada item, 
//ex: 1 - banana, 2 - pera 3- uva ...
const arrayExercicio = [
  "banana",
  "pera",
  "uva",
  "maça",
  "figo",
  "abacaxi",
  "caviar"
];

const map = Array.prototype.map
let cont = 0;
const frutasNumeradas = map.call(arrayExercicio, frutas => {
    cont++
    return `${cont} - ${frutas}`
})

console.log(frutasNumeradas)