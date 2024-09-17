console.clear();
const frase = "Eu sou uma frase com algumas palavras";

// achar o índice de algo
const indexEncontrado = frase.indexOf("sou"); //aqui coloca o index que quer, ou seja, o item que quer, e o resultado vai ser a posição (o número mesmo) em que esse item estar.
console.log(indexEncontrado, frase[indexEncontrado]);
 
// achar o índice de um item na array
const listaFrutas = ["Banana", "Pera", "Maça", "Pera"];
const palavraBuscada = "Pera";
const indexFruta = listaFrutas.indexOf(palavraBuscada); //aqui a mesma coisa, é uma variavel que vai determinar a seleção da posição da lista de fruta criada, e a posição do item selecionado na palavrabuscada

if (indexFruta > -1) { //esse -1 significa que o sistema vai procurar a palavra até a posição menos1.
  console.log(`Encontrei ${listaFrutas[indexFruta]} na posição ${indexFruta} `);
} else {
  console.log("Não achei" + palavraBuscada);
}
//indesOf