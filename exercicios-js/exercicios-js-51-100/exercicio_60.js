/*
60 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são divisíveis por 7.
*/

const numeros = [7, 14, 15, 3, 8]

function multiploDeSete (array){
    return array.filter(numero => numero % 7 === 0)
}

console.log(multiploDeSete(numeros))