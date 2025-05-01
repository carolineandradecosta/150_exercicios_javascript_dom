/*
78 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que contêm a letra "u".
*/

const palavras = ["urso", "unidade", "tucano", "moto", "porta"]

const contemLetraU = (array) => (array.filter(palavra => palavra.includes("u")));

console.log(contemLetraU(palavras))
