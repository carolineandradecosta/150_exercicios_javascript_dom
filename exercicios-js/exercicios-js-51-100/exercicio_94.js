/*
94 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que contêm a letra "y".
*/

const palavras = ["layout", "hobby", "display", "moto", "porta"]

const contemLetraY = (array) => (array.filter(palavra => palavra.includes("y")));

console.log(contemLetraY(palavras))
