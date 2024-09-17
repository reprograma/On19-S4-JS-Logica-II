// Imprima o que pedem os comentários

const frase = "Eu sou uma frase com algumas palavras";

// usando replace, troque 'sou' por 'não sou'
const trocado = frase.replace("sou", "não sou")
console.log("Exemplo 1")
console.log(trocado)

// usando replace, troque 'algumas' por 'poucas'
console.log("Exemplo 2")
const trocado2 = frase.replace("algumas", "poucas")
console.log(trocado2)

// usando replace, troque 'Eu' por 'Ieu mema'
console.log("Exemplo 3")
const trocado3 = frase.replace("Eu", "Ieu mema")
console.log(trocado3)

// usando replaceAll trocar todas as letras a por -
console.log("Exemplo 4")
const trocado4 = frase.replaceAll("a", "-")
console.log(trocado4)

// use replace com regex para trocar todas as letras a por -
console.log("Exemplo 5")
const trocado5 = frase.replace(/a/gi, "-");
console.log(trocado5)