/*
20 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne a média dos números do array.
*/

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function mediaArray(numeros){
    const soma = numeros.reduce((acumulador, n) => acumulador + n, 0);
    return soma / numeros.length;
}

console.log(`Media do array: ${mediaArray(numeros)}`);
