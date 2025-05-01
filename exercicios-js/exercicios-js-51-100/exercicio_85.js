/*
85 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string tenha as consoantes duplicadas. Utilize a função replace() para duplicar as consoantes.
*/

const palavras = [`alimento`, `casa`, `objetivo`, `escada`];

function duplicaConsoante(array){
    return array.map(palavra => palavra.replace(/[^aeiou\s\d\W_]/gi, consoante => consoante + consoante))
}

console.log(duplicaConsoante(palavras))
