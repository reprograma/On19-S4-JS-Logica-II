const dia = 1
const mes = 2
const ano = 2027

// imprima 01/02/2027 usando as constantes acima e padStart para adicionar o zero em dia e mes
let novoDia = '' + dia
novoDia = dataDia.padStart(2, '0')
let novoMes = '' + mes
novoMes = dataMes.padStart(2, '0')
console.log(novoDia + '/' + novoMes + '/' + ano)
