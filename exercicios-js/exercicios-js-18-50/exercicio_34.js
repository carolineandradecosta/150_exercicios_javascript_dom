/*
34 - Crie um script que declare um array de objetos, onde cada objeto representa um aluno e possui as propriedades nome, idade e notas (um array de números). Utilize a função reduce() para calcular a média das idades dos alunos.
*/

const alunos = [
    {
        nome:`Carol`,
        idade: 16,
        notas: [10.0, 9.7, 8.9, 8.3]   
    },
    {
        nome:`Celiane`,
        idade: 59,
        notas: [7.0, 8.7, 8.0, 8.1] 
    },
    {
        nome:`Marcos`,
        idade: 60,
        notas: [9.0, 7.7, 9.9, 8.2] 
    }
]

const mediaIdades = alunos.reduce((acumulador, aluno) => acumulador + aluno.idade, 0) / alunos.length;

console.log(mediaIdades);