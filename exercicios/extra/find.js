// crie um execício que use o find

const repteisDePernambuco = [
    {
        nome: 'Mabuya',
        patas: 4,
        olhos: 2,
        pernambuco: true
    },
    {
        nome: 'surucucu',
        patas: 0,
        olhos: 2,
        pernambuco: true
    },
    {
        nome: 'ophiodes',
        patas: 2,
        olhos: 2,
        pernambuco: true
    }
]

console.log(repteisDePernambuco.find(cach => cach.patas > 2))  