// inverter os valores

// 2 formas de realizar a atividade

// 1 forma:

let a = 7;
let b = 90;

// a varialvel TEMP armazena o valor de A e assim conseguimos fazer a troca
let temp = a
a = b
b = temp


// 2 forma:

// Nesse caso, colocamos que na lista 1 a posição A pega o valor de B e a posição B pega o valor de A
[a, b] = [b, a]