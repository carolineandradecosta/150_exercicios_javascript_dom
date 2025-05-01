/*
74 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que contêm a letra "i".
*/

const palavras = ["ilha", "inicio", "galinha", "moto", "porta"]

const contemLetraI = (array) => (array.filter(palavra => palavra.includes("i")));

console.log(contemLetraI(palavras))
