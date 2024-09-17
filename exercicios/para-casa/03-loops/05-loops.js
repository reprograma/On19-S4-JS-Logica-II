// crie um loop como preferir que conte quantas letras 'a' existem na frase e imprima.

const frase = "Eu sou uma frase com algumas palavras";

let contador = 0
for (let index = 0; index < frase.length; index++) {
    if(frase[index].toLocaleLowerCase() === 'a') {
    contador = contador + 1 // contador +1 é igual a contador +=1
    }
}
console.log(contador)
//var qtd = 0;
//for (var x of frase) {
  //  if (x === "a") qtd++;
//}
//console.log("A quantidade de elementos 'a' dentro da frase é: " + qtd); 


