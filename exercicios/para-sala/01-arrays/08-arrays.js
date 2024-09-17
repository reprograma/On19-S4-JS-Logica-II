console.clear();
//sort
const listaFrutas = [
  "Banana",
  "Manga",
  "Maça",
  "Pera",
  "Abacaxi"
];

function comparar(itemEsquerdo, itemDireito) { //essa função compara um item com o outro. aqui por exemplo, se o item for maior que o outro, a resposta imprime como -1.
  if (itemEsquerdo > itemDireito) {
    return -1;
  }
  if (itemDireito > itemEsquerdo) { // se for maior que o outro ele imprime 1 e retorna 1, vai organizar a lista de acordo com as letras. assim organiza do Z para o A, se quiser o inverso é só inverter os sinais dos "1".
    return 1;
  }
  return 0;
}

const ordenado = listaFrutas.sort(comparar); // aqui vc determina que o sistema vai ordenar a lista de frutas de acordo com a função acima.
console.log(listaFrutas);
