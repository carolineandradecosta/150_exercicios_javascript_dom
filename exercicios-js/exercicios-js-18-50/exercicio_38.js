/*
38 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que terminam com a letra "a".
*/

const nomes = [`André`, `Amaro`, `Brenda`, `Maria`];

function terminaComA(arrayNomes){
    return arrayNomes.filter(nome => nome.endsWith("a"))
}

console.log(terminaComA(nomes));
