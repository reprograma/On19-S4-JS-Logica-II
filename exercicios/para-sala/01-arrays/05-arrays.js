console.clear();
const frase = "Eu sou uma frase com algumas palavras";

const trocado = frase.replace("algumas", "poucas"); //aqui já está solicitando a troca da palavra "algumas", pela palavra "poucas".
console.log(trocado);

const trocado2 = frase.replace("uma frase", "um texto"); // aqui a mesma coisa do comentario anterior.
console.log("\n" + trocado2);

const pessoa = { //aqui é um exemplo de como pov usar o replace em um projeto
  nome: "Fulana",
  genero: "feminino"
}
const template = `Bem-vindo ${pessoa.nome.toUpperCase()}`; //o toUpperCase é para deixar a palavra toda em caixa alta. se não fosse o toUpperCase, a palavra fulana ficaria tudo normal.
let result;
if (pessoa.genero === "feminino") { //aqui é dizendo que o genero feminino
  result = template.replace("Bem-vindo", "Bem-vinda"); // e o resultado é que se na hora de rodar o nome da pessoa ou o genero for colocado no feminino ele altera para o feminino.
}
console.log("\n", result); //aqui é um exemplo de como pov usar o replace em um projeto.

// Regex e all
const trocado3 = frase.replace(/a/gi, "A");
console.log("\n", trocado3);

const trocado4 = frase.replaceAll("a", "A");
console.log("\n", trocado4);
//replace troca a primeira palavra que encontrou, mas o replaceAll troca todas as palavras encontradas.