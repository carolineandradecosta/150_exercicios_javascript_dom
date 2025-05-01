/*
100 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são divisíveis por 10.
*/

const numeros = [10, 20, 18, 40, 35]

function divisiveisDez (array){
    return array.filter(numero => numero % 10 === 0)
}

console.log(divisiveisDez(numeros))
