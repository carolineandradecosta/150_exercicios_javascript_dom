/*
64 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são maiores que 20.
*/

const numeros = [50, 49, 30, 99, 80, 20]

const maioresQueVinte = (array) => array.filter(numero => numero > 20)

console.log(maioresQueVinte(numeros))