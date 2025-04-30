/*
44 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são divisíveis por 2.
*/

const numeros = [1, 2, 3, 4, 5];

function numeroDivisiveisDois (arrayNumeros){
    return arrayNumeros.filter(numero => numero % 2 === 0)
}

console.log(numeroDivisiveisDois(numeros));
