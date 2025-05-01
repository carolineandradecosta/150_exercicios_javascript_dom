/*
69 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string tenha a primeira e a última letra em minúscula. Utilize a função toLowerCase() para converter as letras.
*/

const palavras = ["BANANA", "BALÃO", "BOLA", "CARRO", "PORTA"]

const primeraEultimaMinuscula = (array) => array.map(palavra => palavra.charAt(0).toLowerCase() + palavra.slice(1, palavra.length -1) + palavra.charAt(palavra.length -1).toLowerCase())

console.log(primeraEultimaMinuscula(palavras));