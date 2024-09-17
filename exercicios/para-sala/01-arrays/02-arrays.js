console.clear();
const frase = "Eu sou uma frase com algumas palavras";

//acessando índice da string. string é a frase.
console.log(frase[3], frase[4], frase[5]); //aqui é em relação as letras, os numeros entre [] sao as posições das letras que vc escolheu.

// procurando se existe um parte da string
console.log("Buscando em string");
const palavraBuscada = "palavras"
if (frase.includes(palavraBuscada)) {
  console.log("Encontrei", frase.includes(palavraBuscada));
} else {
  console.log("Não encontrei", frase.includes(palavraBuscada));
}

// procurando algo na array. array é a lista.
console.log("\nBuscando em array"); //esse \n dá uma linha no terminal, pula uma linha no resultado no terminal.
const listaTextos = ["Banana", "Pera", "Maça", "Pera"];

const encontrouPalavraBuscada = listaTextos.includes("Pera"); //esse encontroupalavrabuscada é o resultado da lista de texto junto com a palavra que vc quer encontrar utilizando o includes.
if (encontrouPalavraBuscada) {
  console.log("Encontrei", encontrouPalavraBuscada);
} else {
  console.log("Não encontrei", encontrouPalavraBuscada);
}
//includes