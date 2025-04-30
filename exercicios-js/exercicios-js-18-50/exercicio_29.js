/*
29 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que começam com a letra "A".
*/

const nomes = [`André`, `Amaro`, `Brenda`, `Maria`];

function iniciaComA(arrayNomes){
    return arrayNomes.filter(nome => nome.startsWith("A"))
}

console.log(iniciaComA(nomes));
