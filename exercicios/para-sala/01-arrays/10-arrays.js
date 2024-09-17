console.clear();
// inserindo e deletando itens
// push(item) = adiciona ao final
// pop() remove do final
// unshift(item) adiciona no inicio
// shift() remove do inicio

const arrayExemplo = [];

arrayExemplo.push("Opalão"); //o push é enviar, então vc tá enviando algo para dentro da arrays. no caso a palavra enviada é a dentro das ""
console.log("Push: ", arrayExemplo); //cada vez que dê um push acrescenta a palavra no final.

arrayExemplo.push("Chevet");
console.log("Push2: ", arrayExemplo);

arrayExemplo.pop();
console.log("Pop: ", arrayExemplo); //pop vai excluir o último item adicionado.

arrayExemplo.unshift("Chevet"); //o unshift recebe item, então adiciona. esse adiciona o último item adicionado no inicio.
console.log("Unshift: ", arrayExemplo);

arrayExemplo.shift(); //o shift deleta item. esse deleta o primeiro item.
console.log("Shift: ", arrayExemplo);
