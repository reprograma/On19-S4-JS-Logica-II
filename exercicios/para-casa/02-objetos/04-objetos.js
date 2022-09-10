console.clear();

const pessoa = {
  nome: "Fulana",
  idade: 41,
  altura: 1.74,
  temCNH: true,
  apelidos: ["Fu", "Ful", "Lana"],
  faixaEtaria: function () {
    if (this.idade <= 18) {
      console.log("Esse usuário é jovem.");
    } else if (this.idade > 18 && this.idade <= 64) {
      console.log("Esse usuário é adulto.");
    } else { 
      console.log("Esse usuário é idoso.");
    }
  }
};


// crie um método nesse objeto chamado faixaEtaria,
// que irá imprimir se a pessoa é jovem, adulta ou idosa
// sendo jovem até exatamente 18 anos, adulta até exatamente 64 e idosa acima ou igual 65 anos
// ex: Olá, sou uma pessoa jovem!

pessoa.faixaEtaria();

// altere a idade da pessoa do objeto para 77 anos e utilize o método que criou para imprimir sua faixa etária
pessoa.faixaEtaria(pessoa.idade = 77);