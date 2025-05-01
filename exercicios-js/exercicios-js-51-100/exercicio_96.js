/*
96 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são múltiplos de 9.
*/

const numeros = [9, 36, 18, 45, 35]

function multiploDeNove (array){
    return array.filter(numero => numero % 9 === 0)
}

console.log(multiploDeNove(numeros))
