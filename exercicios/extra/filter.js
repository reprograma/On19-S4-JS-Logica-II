const arrNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Usando filter, imprima apenas os números acima de 10
const acimaDeDez = arrNumeros.filter(num => num > 10)
console.log(acimaDeDez)

// Usando filter, imprima apenas os números pares
const numerosPares = arrNumeros.filter(num => num % 2 === 0)
console.log(numerosPares)

console.log('')
const arrObjetos = [
  {
    nome: "Maria",
    idade: 21
  },
  {
    nome: "Josefa",
    idade: 12
  },
  {
    nome: "Clementina",
    idade: 55
  },
  {
    nome: "Gustava",
    idade: 14
  },
  {
    nome: "Chablana",
    idade: 33
  }
];

// usando filter, imprima uma array só com os adultos
const Adultos = arrObjetos.filter(pessoa => pessoa.idade > 18)
console.log(Adultos)

// usando filter, imprima apenas as pessoas cuja letra inicial do nome seja C
const nomesComC = arrObjetos.filter(pessoa => pessoa.nome.startsWith('C'))
console.log(nomesComC)
