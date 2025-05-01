/*
70 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que têm mais de 7 caracteres.
*/

const palavras = [`elefante`, `casa`, `geladeira`, `escada`];

function maisSeteLetras(array){
    return array.filter(nome => nome.length > 7)
}

console.log(maisSeteLetras(palavras))
