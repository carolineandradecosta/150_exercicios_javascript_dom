/* 
41 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string tenha a primeira letra em maiúscula. Utilize a função toUpperCase() para converter a primeira letra.
*/

const arrayFrutas = [`banana`, `laranja`, `abacaxi`];

function primeiraLetrasMaiuscula(array){
    return array.map(nome => nome.charAt(0).toUpperCase() + nome.slice(1))
}

console.log(primeiraLetrasMaiuscula(arrayFrutas))
