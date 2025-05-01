/*
76 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são múltiplos de 6.
*/

const numeros = [6, 36, 18, 40, 35]

function multiploDeSeis (array){
    return array.filter(numero => numero % 6 === 0)
}

console.log(multiploDeSeis(numeros))
