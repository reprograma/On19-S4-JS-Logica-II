console.clear();
const frase = "Eu sou uma frase com algumas palavras";

const strCortada = frase.slice(7); //slice é cortar o item selecionado na lista. aqui vc cortou a posição 7 da variavel determinada acima. aqui no caso, vai pegar a partir de "uma..."
console.log("string", strCortada);

const listaFrutas = [
  "Banana",
  "Manga",
  "Maça",
  "Pera",
  "Abacaxi"
];

// Cortando arrays
const arrayCortada = listaFrutas.slice(1); //aqui é só selecionando o 1 da posição do item que vc quer selecionar para não aparecer no terminal. ou seja, o número é onde o sistema vai começar a contar, se tiver na posição 1, vai cortar o 1 e começar pelo 2
console.log("\nÍndice positivo", arrayCortada);

const arrayCortada2 = listaFrutas.slice(-4); //usando numero negativo, começa a cortar de tras para frente, o numero positivo é o contrario.
console.log("\nÍndice negativo", arrayCortada2);

const arrayCortada3 = listaFrutas.slice(2, 4); //aqui corta a partir do 2, e para na posição determinada pelo segundo numero, ou seja, aqui começa com a posição 2, e para na posição 4 e ignora todo o resto. nesse caso, é selecionado a maçã e a pera, pq para no abacaxi, mas não pega o abacaxi, pega o anterior.
console.log("\nposição parada", arrayCortada3);
//slice