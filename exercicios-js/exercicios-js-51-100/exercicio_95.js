/*
95 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja elevado à quinta potência.
*/

const numeros = [1, 2, 3, 4, 5]

const numerosAquintaPotencia = (array) => array.map(numero => numero ** 5)

console.log(numerosAquintaPotencia(numeros))
