const usandoString = "Primeiro Teste";

// nessas 2 linhas abaixo, o console me retorna qual letra está na posição indicada dentro do (), começando a contagem em 0
console.log(usandoString.charAt(4));

console.log(usandoString.charAt(13));

// nessa linha de baixo, ele vai me informal qual é o código referente ao caracter encontrado.
console.log(usandoString.charCodeAt(4));

// nessa linha ele retorna em que posição está o caracter selecionado dentro dos ()
console.log(usandoString.indexOf('e'));

// ele retorna a palavra a partir do caracter que está na posição selecionada nos ()
console.log(usandoString.substring(6));
console.log(usandoString.substring(3, 12));

// usando para concatenar duas strings
console.log('Esse foi o meu '.concat(usandoString));

console.log('Esse foi o meu ' + usandoString + ", espero que gostem!");

// usando para fazer o replace de um caracter (o comando /\caracter que sera procurado/g serve para substituir TODOS os caracteres na String, não só a primeira)
console.log(usandoString.replace(/\e/g, 'a'));


// transformando uma String com várias informações em um Array
console.log('Pedro,Geovanna,Lucas,Marianna'.split(','));
