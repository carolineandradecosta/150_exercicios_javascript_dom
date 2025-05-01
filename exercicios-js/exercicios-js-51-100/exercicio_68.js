/*
68 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são ímpares e maiores que 15.
*/

const numeros = [33, 57, 35, 20, 40]

const ImparesEMaiorQuinze = (array) => (array.filter(numero => numero % 2 !==0 && numero > 15))

console.log(ImparesEMaiorQuinze(numeros));
