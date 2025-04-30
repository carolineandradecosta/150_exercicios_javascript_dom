/*
43 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja multiplicado por 3.
*/

const numeros = [1, 2, 3, 4, 5];

function numeroMultiplicadoTres (arrayNumeros){
    return arrayNumeros.map(numero => numero * 3)
}

console.log(numeroMultiplicadoTres(numeros));
