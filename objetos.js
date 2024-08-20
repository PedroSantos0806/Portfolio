const prod1 = {};

prod1.nome = 'Celular Iphone 15 Pro';
prod1.preco = 7890.90;
prod1['Desconto Legal'] = 0.40; // evitar atributos com espaço

console.log(prod1);

const prod2 = {
    nome: 'Computador Gamer',
    preco: 5199.99,
    obj: {
        blablabla: 1
    }
};

console.log(prod2)