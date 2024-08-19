let notas = [];

function adicionarNota() {

}

function atulizarListaNotas() {

}

function calcularMedia(){
    let somatorioNotas = 0;
    let media = 0;

    for (let index = 0; index < notas.length; index +=1) {
        somatorioNotas = somatorioNotas + notas[index];
    }

    media = somatorioNotas / notas.length;

    if (media > 6) {
        document.getElementById('result').textContent = 'Estudante APROVADO!';
    } else {
        document.getElementById('result').textContent = 'Estudante REPROVADO!';
    }
}