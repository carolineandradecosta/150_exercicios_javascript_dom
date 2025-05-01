/*
80 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são divisíveis por 8.
*/

const numeros = [8, 16, 24, 30, 45]

function multiploDeOito (array){
    return array.filter(numero => numero % 8 === 0)
}

console.log(multiploDeOito(numeros))
