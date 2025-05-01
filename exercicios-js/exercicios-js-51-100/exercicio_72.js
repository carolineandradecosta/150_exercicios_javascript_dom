/*
72 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são menores que 30.
*/

const numeros = [15, 49, 29, 99, 80, 20]

const menoresQueTrinta = (array) => array.filter(numero => numero < 30)

console.log(menoresQueTrinta(numeros))
