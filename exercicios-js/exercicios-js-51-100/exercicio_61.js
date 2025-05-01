/*
61 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string tenha a primeira e a última letra em maiúscula. Utilize a função toUpperCase() para converter as letras.
*/

const palavras = [`bola`, `casa`, `porta`, `carro`];

const primeraEultimaMaiuscula = (array) => array.map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1, palavra.length -1) + palavra.charAt(palavra.length -1).toUpperCase())

console.log(primeraEultimaMaiuscula(palavras));

