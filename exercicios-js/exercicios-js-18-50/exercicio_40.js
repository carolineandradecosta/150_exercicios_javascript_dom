/*
40 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são maiores que 10.
*/

const numeros = [11, 9, 10, 90, 50, 4]

function maioresQueDez(array){
    return array.filter(numero => numero > 10)
}

console.log(maioresQueDez(numeros))
