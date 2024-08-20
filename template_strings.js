// template string é usado para melhorar algumas situações de codigo, como concatenar, por exemplo

// Modo normal de concatenação
const nome = 'Pedro';
const concatenacao = 'Olá ' + nome + '!';


// modo usando o template string
const template = `
    olá
    ${nome}!`;
console.log(concatenacao);


// fazendo expressões matemáticas  
console.log(`1 + 1 = ${1 + 1}`);


// Usando função dentro de uma template (toUpperCase para transformar em maiuscula)
const up = texto => texto.toUpperCase();
console.log(`ei... ${up("cuidado")}!`)


// quando usamos o ${} o código vai tentar interpretar o que está escrito dentro