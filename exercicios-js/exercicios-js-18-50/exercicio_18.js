/*
18 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne o maior número do array. Utilize a função Math.max() para encontrar o maior número.
*/

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function maiorNumero(numeros){
    return Math.max(...numeros)
}

console.log(`Maior numero do array: ${maiorNumero(numeros)}`)
