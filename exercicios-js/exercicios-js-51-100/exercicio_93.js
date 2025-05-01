/*
93 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string tenha as vogais triplicadas. Utilize a função replace() para triplicar as vogais.
*/

const palavras = [`bola`, `casa`, `porta`, `carro`];

function triplicarVogais(array){
    return array.map(palavra => palavra.replace(/[aeiouáéíóúâêîôûãõàäëïöüAEIOUÁÉÍÓÚÂÊÎÔÛÃÕÀÄËÏÖÜ]/g, (vogal) => vogal.repeat(3)))
}

console.log(triplicarVogais(palavras))
