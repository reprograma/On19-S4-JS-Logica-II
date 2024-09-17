const pessoa = {
  nome: "Fulana",
  idade: 41,
  altura: 1.74,
  temCNH: true,
  apelidos: ["Fu", "Ful", "Lana"]
};


// usando seu conhecimento em loops, imprima todos os apelidos da pessoa um por um
for (pessoa.apelidos of pessoa.apelidos) {
  console.log(pessoa.apelidos);
}