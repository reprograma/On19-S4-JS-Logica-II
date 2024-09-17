console.clear();
//splice. splice é o indicativo de qual item vc quer excluir. altera a lista original.
const listaFrutas = [
  "Banana",
  "Manga",
  "Maça",
  "Pera",
  "Abacaxi"
];
// o primeiro numero é a posição, o segundo número é a quantidade.
const resultado = listaFrutas.splice(2, 1); //ou seja, vc seleciona onde vai começar, e o segundo número é quantos vai excluir, logo, nesse caso, começou a partir da maçã e pediu para excluir um, que foi a maça também já que ela está na primeira posição. sobra a maçã. 
console.log("Comeu: ", resultado);
console.log("Sobrou: ", listaFrutas); //aqui como foi selecionado o 1 para ser deletado, a maçã sumiu da lista no resultado.

listaFrutas.splice(2, 0, "Uva"); //aqui como não foi selecionado nenhuma posição para excluir, a lista ficou com todas as frutas iniciais, e a uva foi a substituta da maça.
console.log("Sobrou: ", listaFrutas);

