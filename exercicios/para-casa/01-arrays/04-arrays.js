// Imprima o que for pedido nos comentários

const frase = 'Eu sou uma frase com algumas palavras'

// usando indexOf, verifique o index de inicio da palavra 'sou'
console.log(frase.indexOf('sou'))

// usando indexOf, verifique o index de inicio da palavra 'algumas'
console.log(frase.indexOf('algumas'))

// usando indexOf, verifique o index de inicio da palavra 'cachorro'
console.log(frase.indexOf('cachorro')) // "cachorro" não existe no array

const arrayExercicio = [
  'banana',
  'pera',
  'uva',
  'maça',
  'figo',
  'abacaxi',
  'caviar'
]

// usando indexOf, verifique a posição da palavra 'banana'
console.log(arrayExercicio.indexOf('banana'))

// usando indexOf, verifique a posição da palavra 'figo'
console.log(arrayExercicio.indexOf('figo'))

// usando indexOf, verifique a posição da palavra 'macarrão'
console.log(arrayExercicio.indexOf('macarrão')) // "macarrão" não existe no array
