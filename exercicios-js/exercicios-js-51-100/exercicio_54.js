/*
54 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que começam com a letra "B".
*/

const palavras = ["Banana", "Balão", "bola", "Carro", "Porta"]

const comecaComB = (array) => array.filter(palavra => palavra.startsWith("B"));

console.log(comecaComB(palavras));
