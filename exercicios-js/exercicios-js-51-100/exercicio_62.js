/*
62 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que têm exatamente 6 caracteres.
*/

const palavras = [`bola`, `casa`, `geladeira`, `escada`];

function apenasSeisLetras(array){
    return array.filter(nome => nome.length === 6)
}

console.log(apenasSeisLetras(palavras))
