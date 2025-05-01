/*89 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string tenha a primeira letra em minúscula e a última letra em maiúscula. Utilize a função toLowerCase() e toUpperCase() para converter as letras.*/

const palavras = ["BANANA", "balão", "BOLA", "carro", "PORTA"]

const minusculaEmaiuscula = (array) => array.map(palavra => palavra.charAt(0).toLowerCase() + palavra.slice(1, palavra.length -1) + palavra.charAt(palavra.length -1).toUpperCase())

console.log(minusculaEmaiuscula(palavras));
