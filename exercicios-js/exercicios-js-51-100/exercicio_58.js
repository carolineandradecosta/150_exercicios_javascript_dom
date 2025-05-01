/*
58 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que contêm a letra "o".
*/

const palavras = ["Banana", "Balão", "bala", "Carro", "Porta"]

const contemLetraO = (array) => (array.filter(palavra => palavra.includes("o")));

console.log(contemLetraO(palavras))
