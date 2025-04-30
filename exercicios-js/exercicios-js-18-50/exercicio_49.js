/*
49 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string tenha a última letra em maiúscula. Utilize a função toUpperCase() para converter a última letra.
*/

const arrayFrutas = [`banana`, `laranja`, `abacaxi`];

function ultimaLetraMaiuscula(array){
    return array.map(nome => nome.slice(0, nome.length -1) + nome.charAt(nome.length -1).toUpperCase())
}

console.log(ultimaLetraMaiuscula(arrayFrutas))
