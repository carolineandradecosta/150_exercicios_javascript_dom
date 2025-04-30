/* 
8 - Faça um script que contenha um array chamado notas, esse array armazena 3 notas de um aluno. O programa deve imprimir:

A primeira nota do aluno é: …
A segunda nota do aluno é: …
A terceira nota do aluno é: …
A média do aluno é: …
O aluno está: APROVADO ou REPROVADO (APROVADO quando a média for maior ou igual a 7).
*/

const mediaParaAprovacao = 7.0;

const notas = [8.1 , 7.5, 8.2];

const media = ((notas[0] + notas[1] + notas[2])/notas.length).toFixed(1);

var statusAprovacao;

if (media < mediaParaAprovacao) {
    statusAprovacao = "REPROVADO";
} else {
    statusAprovacao = "APROVADO";   
}

console.log(`A primeira nota do aluno é: ${notas[0]}`);
console.log(`A segunda nota do aluno é: ${notas[1]}`);
console.log(`A terceira nota do aluno é: ${notas[2]}`);
console.log(`A média do aluno é: ${media}`);
console.log(`Portanto, o aluno está ${statusAprovacao}`);
