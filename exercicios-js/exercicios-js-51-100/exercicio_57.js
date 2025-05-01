/*
57 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string esteja em letras minúsculas e invertida.
*/

const palavras = ["BANANA", "BALÃO", "BOLA", "CARRO", "PORTA"]

const minusculasEinvertidas = (array) => array.map(palavra => palavra.toLowerCase().split("").reverse().join(""))

console.log(minusculasEinvertidas(palavras))
