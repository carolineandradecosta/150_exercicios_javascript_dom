/*
67 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja multiplicado por 5.
*/

const numeros = [2, 3, 1, 5, 7]

const multiplicaPorCinco = (array) => (array.map(numero => numero * 5))

console.log(multiplicaPorCinco(numeros))
