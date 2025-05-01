/*
66 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que começam com a letra "C".
*/

const palavras = [`Bola`, `Casa`, `Porta`, `Carro`];

const comecaComC = (array) => array.filter(palavra => palavra.startsWith("C"))

console.log(comecaComC(palavras))
