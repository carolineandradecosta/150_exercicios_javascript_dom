/*
92 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são menores que 35.
*/

const numeros = [33, 57, 35, 20, 15]

const menorTrintaEcinco = (array) => (array.filter(numero => numero < 35))

console.log(menorTrintaEcinco(numeros));
