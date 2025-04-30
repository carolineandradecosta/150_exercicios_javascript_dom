/*
46 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que contêm a letra "e".
*/

const arrayFrutas = [`abacate`, `laranja`, `uva`];

const contemLetraE = (array) => (array.filter(nome => nome.includes("e")));

console.log(contemLetraE(arrayFrutas))
