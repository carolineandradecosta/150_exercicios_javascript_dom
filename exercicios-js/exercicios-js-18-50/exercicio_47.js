/*
47 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja multiplicado por 10.
*/

const numeros = [2, 3, 1, 5, 7]

const multiplicaPorDez = (array) => (array.map(numero => numero * 10))

console.log(multiplicaPorDez(numeros))
