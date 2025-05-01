/*
82 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que têm exatamente 8 caracteres.
*/

const palavras = [`alimento`, `casa`, `objetivo`, `escada`];

function apenasOitoLetras(array){
    return array.filter(nome => nome.length === 8)
}

console.log(apenasOitoLetras(palavras))
