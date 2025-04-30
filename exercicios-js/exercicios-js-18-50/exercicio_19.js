/*
19 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne o menor número do array. Utilize a função Math.min() para encontrar o menor número.
*/

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function menorNumero(numeros){
    return Math.min(...numeros)
}

console.log(`Menor numero do array: ${menorNumero(numeros)}`)
