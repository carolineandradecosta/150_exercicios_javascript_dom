/*
42 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que têm mais de 5 caracteres.
*/

const arrayFrutas = [`banana`, `laranja`, `uva`];

function strintMaisQueCinco(array){
    return array.filter(nome => nome.length > 5)
}

console.log(strintMaisQueCinco(arrayFrutas));

