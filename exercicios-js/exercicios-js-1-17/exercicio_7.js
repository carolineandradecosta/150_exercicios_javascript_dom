/*
7 - Crie um script que combine o uso de objetos literais, arrays e cálculos simples para armazenar e manipular informações pessoais e acadêmicas de uma pessoa. O script deve realizar as seguintes tarefas:

nome: O nome do aluno.
cpf: O CPF do aluno.
cidade: A cidade onde o aluno mora.
notas: Um array com 4 notas do aluno. Imprima o nome, CPF e cidade do aluno. Imprima cada uma das notas do array notas. Calcule a média das notas do aluno e imprima. Selecione uma das notas aleatoriamente, convertê-la de uma escala de 0-10 para uma escala de 0-100 (nota convertida = nota × 10). Utilize a sintaxe notas[Math.floor(Math.random() * notas.length)] para selecionar uma nota aleatória do array. Utilize template literals para a concatenação de strings.
*/

let aluno = {
    nome: "Caroline",
    cpf: 99988877755,
    cidade: "Campina Grande",
    notas : [7.4, 8.8, 9.1, 7.5]
};

console.log(`Nome: ${aluno.nome}`);
console.log(`CPF: ${aluno.cpf}`);
console.log(`Cidade: ${aluno.cidade}`);

console.log(`A segunda nota do aluno é: ${aluno.notas[1]}`);
console.log(`A terceira nota do aluno é: ${aluno.notas[2]}`);
console.log(`A quarta nota do aluno é: ${aluno.notas[3]}`);

var media = (aluno.notas[0] + aluno.notas[1] + aluno.notas[2] + aluno.notas[3])/ aluno.notas.length;

console.log(`A média do aluno é: ${media.toFixed(1)}`);

var notaAleatoria = aluno.notas[Math.floor(Math.random() * aluno.notas.length)];

var notaConvertida = notaAleatoria * 10;

console.log(`A nota sorteada foi: ${notaAleatoria} e convertida para a escala de 0-100 é: ${notaConvertida}`);

/* Outra forma de resolver: */

let aluno2 = {
    nome: "Caroline",
    cpf: 99988877755,
    cidade: "Campina Grande",
    notas : [7.4, 8.8, 9.1, 7.5]
};

console.log(`Nome: ${aluno2.nome}, CPF: ${aluno2.cpf}, Cidade: ${aluno2.cidade}`);
aluno2.notas.forEach((nota, i) => console.log(`Nota ${i + 1}: ${nota}`))
const media2 = aluno2.notas.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0)/ aluno.notas.length;
console.log(`Média: ${media2.toFixed(1)}`);
var notaAleatoria2 = aluno.notas[Math.floor(Math.random() * aluno.notas.length)];
var notaConvertida2 = notaAleatoria2 * 10;
console.log(`A nota sorteada foi: ${notaAleatoria2} e convertida para a escala de 0-100 é: ${notaConvertida2}`);
