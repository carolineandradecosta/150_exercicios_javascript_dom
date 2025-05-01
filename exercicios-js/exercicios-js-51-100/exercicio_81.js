/*
81 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string tenha a primeira letra em maiúscula e a última letra em minúscula. Utilize a função toUpperCase() e toLowerCase() para converter as letras.
*/

const palavras = ["BANANA", "balão", "BOLA", "carro", "PORTA"]

const maiusculaEminuscula = (array) => array.map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1, palavra.length -1) + palavra.charAt(palavra.length -1).toLowerCase())

console.log(maiusculaEminuscula(palavras));
