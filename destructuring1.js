const pessoa = {
    nome: "Pedro",
    idade: 21,
    endereco: {
        logradouro: "Rua João Brasilino dos Santos",
        numero: 207
    }
}

const {nome, idade} = pessoa
console.log(nome, idade)


const { nome: n, idade: i} = pessoa
console.log(n, i)


const {sobrenome, bemHumorado = true} = pessoa
console.log(sobrenome, bemHumorado)

const {endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)