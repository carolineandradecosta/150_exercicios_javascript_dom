/*
53 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string tenha as vogais removidas. Utilize a função replace() para remover as vogais.
*/

const palavras = [`bola`, `casa`, `porta`, `carro`];

function removeVogais(array){
    return array.map(palavra => palavra.replace(/[aeiouáéíóúâêîôûãõàäëïöüAEIOUÁÉÍÓÚÂÊÎÔÛÃÕÀÄËÏÖÜ]/g, ""))
}

console.log(removeVogais(palavras))
