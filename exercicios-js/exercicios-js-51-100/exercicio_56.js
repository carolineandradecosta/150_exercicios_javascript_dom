/*
56 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são múltiplos de 4.
*/

const numeros = [4, 10, 15, 3, 8]

function multiploDeQuatro (array){
    return array.filter(numero => numero % 4 === 0)
}

console.log(multiploDeQuatro(numeros))