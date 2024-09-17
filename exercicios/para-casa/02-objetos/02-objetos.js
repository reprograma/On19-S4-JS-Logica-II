const pessoa = {
  nome: "Fulana",
  idade: 41,
  altura: 1.74,
  temCNH: true,
  apelidos: ["Fu", "Ful", "Lana"],
  apresentar: function () { console.log(`Olá, meu nome é ${this.nome}`) }
};

// imprima Olá, meu nome é Fulana, usando o método do objeto
pessoa.apresentar();