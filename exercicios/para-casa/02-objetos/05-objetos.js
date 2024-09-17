const pessoa = {
  nome: "Fulana",
  idade: 41,
  altura: 1.74,
  temCNH: true,
  apelidos: ["Fu", "Ful", "Lana"]
};

// usando for in, imprima todas as propriedades e seus valores, um por um.
for (const key in pessoa) {
  if (key === "nome") {
    pessoa[key] = "Roberta"
  }
  console.log(key + ":" + pessoa[key]);
}