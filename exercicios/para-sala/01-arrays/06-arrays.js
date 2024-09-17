console.clear();
//split - join
const frase = "Eu sou uma frase com algumas palavras";

const picadoArray = frase.split(" "); // o split vai separar tudo que estiver selecionado. nesse caso, quando tem espaço entre "", como no exemplo, o terminal vai imprimir, palavra por palavra, mas se não tiver espaço entre "", o terminal imprime letra por letra, e inclui os espaços.
console.log("Picado: ", picadoArray); //e aqui vai dividir palavra por palavra. é só o comando que o terminal vai conseguir ler. o split pode separar qualquer coisa, basta usar o separador que vc quer.

//const mapeado = picadoArray
  //.map((palavra) => palavra[0].toLocaleUpperCase() + palavra.slice(1)) //essa função é para deixar a primeira letra de cada palavra maiscula.
  //.join(" ");

//console.log("\nMapeado: ", mapeado); //esse map é um tipo de loop. é com o map, split e join faz com que a frase seja separada, cada letra fique em maisculo, e volte a ser uma frase com o inicio de cada palavra em maiscula.

const juntado = picadoArray.join(" "); // o join é juntar, ele usa a mesma lógica do espaço entre "" do caso anterior, só que aqui ele junta.
console.log("\nJuntado: ", juntado);
//esse nome juntado e picado é só para imprimir junto no terminal.