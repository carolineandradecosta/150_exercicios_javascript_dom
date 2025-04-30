/*
23 - Crie um script que declare um array de números e utilize a função reduce() para calcular a soma de todos os números do array. Imprima o resultado.
*/

const numeros = [1, 2, 3, 4, 5].reduce((acumulador, valorInicial) => acumulador + valorInicial, 0);

console.log(numeros);
