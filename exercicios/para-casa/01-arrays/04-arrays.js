// Imprima o que for pedido nos comentários

const frase = "Eu sou uma frase com algumas palavras";

// usando indexOf, verifique o index de inicio da palavra 'sou'
const indexProcurado = "sou"
const indexEncontrado = frase.indexOf(indexProcurado);

if (indexEncontrado > -1) {
  console.log(`Econtrei ${frase[indexEncontrado]} na posição ${indexEncontrado}`);
} else {
  console.log("Não achei" + indexProcurado);
}

// usando indexOf, verifique o index de inicio da palavra 'algumas'
const indexProcurado2 = "algumas"
const indexEncontrado2 = frase.indexOf(indexProcurado2);

if (indexEncontrado2 > -1) {
  console.log(`Econtrei ${frase[indexEncontrado2]} na posição ${indexEncontrado2}`);
} else {
  console.log("Não achei" + indexProcurado2);
}

// usando indexOf, verifique o index de inicio da palavra 'cachorro'
const indexProcurado3 = "cachorro"
const indexEncontrado3 = frase.indexOf(indexProcurado3);

if (indexEncontrado3 > -1) {
  console.log(`Econtrei ${frase[indexEncontrado3]} na posição ${indexEncontrado3}`);
} else {
  console.log("Não achei o index de", indexProcurado3);
}

const arrayExercicio = [
  "banana",
  "pera",
  "uva",
  "maça",
  "figo",
  "abacaxi",
  "caviar"
];

// usando indexOf, verifique a posição da palavra 'banana'
const indexProcurado4 = "banana"
const indexEncontrado4 = arrayExercicio.indexOf(indexProcurado4);

if (indexEncontrado4 > -1) {
  console.log(`Econtrei ${arrayExercicio[indexEncontrado4]} na posição ${indexEncontrado4}`);
} else {
  console.log("Não achei" + indexProcurado4);
}

// usando indexOf, verifique a posição da palavra 'figo'
const indexProcurado5 = "figo"
const indexEncontrado5 = arrayExercicio.indexOf(indexProcurado5);

if (indexEncontrado5 > -1) {
  console.log(`Econtrei ${arrayExercicio[indexEncontrado5]} na posição ${indexEncontrado5}`);
} else {
  console.log("Não achei" + indexProcurado5);
}

// usando indexOf, verifique a posição da palavra 'macarrão'
const indexProcurado6 = "macarrão"
const indexEncontrado6 = arrayExercicio.indexOf(indexProcurado6);

if (indexEncontrado6 > -1) {
  console.log(`Econtrei ${arrayExercicio[indexEncontrado6]} na posição ${indexEncontrado6}`);
} else {
  console.log("Não achei a palavra", indexProcurado6);
}