/*
99 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja multiplicado por 8.
*/

const numeros = [1, 2, 3, 4, 5]

const multiplicaPorOito = (array) => (array.map(numero => numero * 8))

console.log(multiplicaPorOito(numeros))
