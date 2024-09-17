console.clear();
// declarando arrays. arrays sao listas, podem ter diferentes tipo, como os exemplos abaixo. 
//uma das caracteristicas que determinam as arrays, é as [], sempre que tiver esse simbolo é porque é arrays.
const listaNumeros = [1, 2, 3, 4, 5];

const listaTextos = ["Banana", "Pera", "Maça"];

const listaMista = [55, "Olá", true, undefined];

const listaObjetos = [{ nome: "Giu", idade: 42 }, { nome: "Pereira" }]; //os objetos tem as {} e sao separados por virgula. aqui tem dois itens de listas que sao dois objetos, cada objeto entre {}.
//tanto as arrays e os objetos sao formas de agrupar dados.
const listaArrays = [
  ["Macarrão", "Sushi"],
  ["Salsinha", "Sal"]
];

//Acessando itens da array
console.log("listaNumeros", listaNumeros[4]); 

console.log("listaTextos", listaTextos[1]);

console.log("listaMista", listaMista[2]);

console.log("listaObjetos", listaObjetos[0].idade); //esse "." significa que é um objeto para ser selecionado.

console.log("listaArrays", listaArrays[0][0], listaArrays[1][0]); // isso é pq a primeira array é a 1, logo na posição 0, e o segundo numero é relacionado ao item que vc quer.
//se vc colocar todos esses console.log e os itens que vc quer imprimir, no terminal irá aparecer uma lista de todos os selecionados.