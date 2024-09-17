// Imprima o que for pedido nos comentários

const frase = "Eu sou uma frase com algumas palavras";

// usando includes, verifique se a frase contém a palavra 'sou'
console.log("exemplo 1");
const palavraEncontrada = "sou";
if (frase.includes(palavraEncontrada)) {
  console.log("Encontrou a palavra", frase.includes(palavraEncontrada));
} else {
  console.log("Não encontrou a palavra", frase.includes(palavraEncontrada));
}

// usando includes, verifique se a frase contém a palavra 'algumas'
console.log("exemplo 2");
const palavraEncontrada2 = frase.includes("algumas");
if (palavraEncontrada2) {
  console.log("Encontrou a palavra", palavraEncontrada2);
} else {
  console.log("Não encontrou a palavra", palavraEncontrada2);
}

// usando includes, verifique se a frase contém a palavra 'cachorro'
console.log("exemplo 3");
const palavraEncontrada3 = frase.includes("cachorro");
if (palavraEncontrada3) {
  console.log("Encontrou a palavra", palavraEncontrada3);
} else {
  console.log("Não encontrou a palavra", palavraEncontrada3);
}

// usando includes, verifique se a frase contém a palavra 'amanhã'
console.log("exemplo 4");
const palavraEncontrada4 = frase.includes("amanhã");
if (palavraEncontrada4) {
  console.log("Encontrou a palavra", palavraEncontrada4);
} else {
  console.log("Não encontrou a palavra", palavraEncontrada4);
}

const arrayExercicio = [
  "banana",
  "pera",
  "uva",
  "maça",
  "figo",
  "abacaxi",
  "caviar"
];

// usando includes, verifique se a array contém a palavra 'banana'
console.log("exemplo 5");
 const palavraEncontrada5 = arrayExercicio.includes("banana");
if (palavraEncontrada2) {
  console.log("Encontrou a palavra", palavraEncontrada2);
} else {
  console.log("Não encontrou a palavra", palavraEncontrada2);
}

// usando includes, verifique se a array contém a palavra 'figo'
console.log("exemplo 6");
 const palavraEncontrada6 = arrayExercicio.includes("figo");
if (palavraEncontrada6) {
  console.log("Encontrou a palavra", palavraEncontrada6);
} else {
  console.log("Não encontrou a palavra", palavraEncontrada6);
}

// usando includes, verifique se a array contém a palavra 'macarrão'
console.log("exemplo 7");
 const palavraEncontrada7 = arrayExercicio.includes("macarrão");
if (palavraEncontrada7) {
  console.log("Encontrou a palavra", palavraEncontrada7);
} else {
  console.log("Não encontrou a palavra", palavraEncontrada7);
}