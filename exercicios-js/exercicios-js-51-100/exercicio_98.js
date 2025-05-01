/*
98 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que contêm a letra "z".
*/

const palavras = ["azul", "lazer", "display", "xadrez", "caneca"]

const contemLetraZ = (array) => (array.filter(palavra => palavra.includes("z")));

console.log(contemLetraZ(palavras))
