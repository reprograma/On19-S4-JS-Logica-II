const pessoa = {
  nome: "Fulana",
  idade: 41,
  altura: 1.74,
  temCNH: true,
  apelidos: ["Fu", "Ful", "Lana"]
};


// usando seu conhecimento em loops, imprima todos os apelidos da pessoa um por um
const todosApelidos = pessoa.apelidos;
for (let i=0; i < todosApelidos.length; i++) {
  console.log(todosApelidos[i]);
};