/*
83 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja decrementado em 4.
*/

const numeros = [5, 10, 15, 4, 5]

function decrementaQuatro(array){
    return array.map(numero => numero - 4)
}

console.log(decrementaQuatro(numeros))
