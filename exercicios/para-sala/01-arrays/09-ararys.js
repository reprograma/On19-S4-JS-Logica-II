console.clear();
//concatenar e spread

const array1 = ["Uno", "Fusca", "Porche"]; //aqui vc cria as listas, as arrays.
const array2 = ["Brasilia", "Palio"];

const juntado = array1.concat(array2); //aqui vc une as duas arrays, fazendo com que a 1 venha primeiro que a 2.
console.log(juntado);

const juntaSpread = [...array2, ...array1, ...array2]; //aqui é para espalhar os itens, juntando as arrays.
console.log("\n", juntaSpread);

//o concat e o Spread são basicamente a mesma coisa, a diferença é que algumas versões do js não roda o spread (que são os pontinhos), então vc usa o concat.