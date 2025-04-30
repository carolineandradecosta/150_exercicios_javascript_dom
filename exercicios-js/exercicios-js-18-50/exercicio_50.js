/*
50 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que têm exatamente 4 caracteres.
*/

const palavras = [`bola`, `casa`, `porta`, `carro`];

function apenasQuatroLetras(array){
    return array.filter(nome => nome.length === 4)
}

console.log(apenasQuatroLetras(palavras))
