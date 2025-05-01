/*
65 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string tenha as consoantes removidas. Utilize a função replace() para remover as consoantes.
*/

const palavras = [`bola`, `casa`, `porta`, `carro`];

function removeConsoantes(array){
    return array.map(palavra => palavra.replace(/[^aeiouáéíóúàãâêîôûüAEIOUÁÉÍÓÚÀÃÂÊÎÔÛÜ\s\d\W_]/g, ""))
}

console.log(removeConsoantes(palavras))