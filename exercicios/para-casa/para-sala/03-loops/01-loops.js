console.clear();
const listaFrutas = [
  "Banana",
  "Manga",
  "Maça",
  "Pera",
  "Abacaxi",
  "Banana",
  "Manga",
  "Maça",
  "Pera",
  "Abacaxi",
];

let contador = 0;
let frutasAchadas = 0;
const palavraProcurada = "Abacaxi";

//while
while (contador < listaFrutas.length) {
  contador++;
  if (listaFrutas[contador] === palavraProcurada) {
    frutasAchadas++
  }
}

//console.log("While: Achei " + frutasAchadas + " dessa fruta");
frutasAchadas = 0;

//for de C
for (let index = 0; index < listaFrutas.length; index++) {
  listaFrutas[index] = listaFrutas[index][0].toLowerCase() + listaFrutas[index].slice(1);
  console.log(
    index,
    listaFrutas[index],
    listaFrutas[index] === palavraProcurada
  );
  if (listaFrutas[index] === palavraProcurada) {
    frutasAchadas++
  }
}

console.log("For: Achei " + frutasAchadas + " dessa fruta");
