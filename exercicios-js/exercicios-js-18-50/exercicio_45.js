/*
45 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string esteja em letras maiúsculas e invertida.
*/

const arrayFrutas = [`banana`, `laranja`, `uva`];

function maiusculaEinvertida (array) {
    return array.map(nome => nome.split("").reverse().join("").toUpperCase())
}

console.log(maiusculaEinvertida(arrayFrutas))
