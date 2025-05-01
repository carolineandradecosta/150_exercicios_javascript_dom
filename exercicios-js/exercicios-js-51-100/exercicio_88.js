/*
88 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são ímpares e menores que 20.
*/

const numeros = [15, 5, 17, 20, 40]

const ImparesEMaiorQuinze = (array) => (array.filter(numero => numero % 2 !==0 && numero < 20))

console.log(ImparesEMaiorQuinze(numeros));
