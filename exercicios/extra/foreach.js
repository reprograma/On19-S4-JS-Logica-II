const arrNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Usando foreach multiplique cada item por 2 salvando numa nova array, imprima o resultado
let  arrNúmerosMultiplicado  =  [ ]
const  multiplicaArrNúmeros  =  arrNumeros . forEach ( num  =>  arrNúmerosMultiplicado . push ( num  *  2 ) )
console.log ( arrNúmerosMultiplicado )

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

//usando foreach adicione 1 a todas as idades
arrObjetos.forEach(pessoa => { 
  console.log(`Somando 1 na idade de ${pessoa.nome} obtemos a idade: ${pessoa.idade + 1}`)})