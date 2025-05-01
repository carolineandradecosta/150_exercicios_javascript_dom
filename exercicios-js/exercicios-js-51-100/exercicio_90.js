/*
90 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que têm exatamente 9 caracteres.
*/

const palavras = [`essencial`, `esperança`, `objetivo`, `autonomia`];

function apenasNoveLetras(array){
    return array.filter(nome => nome.length === 9)
}

console.log(apenasNoveLetras(palavras))
