/*
84 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são maiores que 25.
*/

const numeros = [33, 57, 35, 20, 15]

const maiorVinteCinco = (array) => (array.filter(numero => numero > 25))

console.log(maiorVinteCinco(numeros));
