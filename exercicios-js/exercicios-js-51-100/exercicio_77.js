/*
77 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string tenha todas as letras em maiúscula e invertida.
*/

const palavras = ["ilha", "inicio", "galinha", "moto", "porta"]

const maiusculaEinvertida = (array) => array.map(palavra => palavra.split("").reverse().join("").toUpperCase())

console.log(maiusculaEinvertida(palavras))
