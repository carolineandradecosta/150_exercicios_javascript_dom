/*
86 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que começam com a letra "D".
*/

const palavras = [`Dado`, `Casa`, `Dinheiro`, `Carro`];

const comecaComD = (array) => array.filter(palavra => palavra.startsWith("D"))

console.log(comecaComD(palavras))
