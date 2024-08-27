function rand([min = 0, max = 1000]) {
    if(min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
// dando o valor das duas variaveis
console.log(rand([50, 40]))

// dando o valor somente do minino
console.log(rand([992]))

// dando o valor somente do maximo
console.log(rand([, 10]))
