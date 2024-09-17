const pessoa = {
  nome: "Mikaela",
  idade: 26,
  altura: 1.63,
  temCNH: true,
  apelidos: ["Mi", "Mika e", "Lela"]
};

// imprima o nome da pessoa
console.log("Nome da Pessoa:")
console.log("Nome: ", pessoa.nome)

// imprima de maneira amigável se a pessoa possui CNH
console.log("Possui CNH?:")
console.log("Meu nome é " + pessoa.nome + " se eu possuo CNH ? " + pessoa.temCNH);

// imprima o último apelido da pessoa
console.log("Último apelido da pessoa:")
console.log(pessoa.apelidos[2]);

// Troque o nome da pessoa e imprima, usando somente o objeto
console.log("Troca de nome:")
pessoa.nome = "Mika"
console.log("Nome: ", pessoa.nome);

// adicione uma noma propriedade chama gênero com o valor 'feminino' e imprima, usando somente o objeto
pessoa.genero = "Feminino"
console.log ("Genero:", pessoa.genero)

console.log("Apresentação:")
  console.log(`Meu nome é ${pessoa.nome}, eu tenho ${pessoa.idade} de idade, ${pessoa.altura} de altura e meus apelidos são ${pessoa.apelidos}`)