/*
55 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja dividido por 2.
*/

const numeros = [20, 10, 100, 200, 2.56]

function numerosDivididosDois (array){
    return array.map(numero => numero / 2)
}

console.log(numerosDivididosDois(numeros))
