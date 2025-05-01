/*
73 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string tenha as vogais duplicadas. Utilize a função replace() para duplicar as vogais.
*/

const palavras = [`bola`, `casa`, `porta`, `carro`];

function duplicaVogais(array){
    return array.map(palavra => palavra.replace(/[aeiouáéíóúâêîôûãõàäëïöüAEIOUÁÉÍÓÚÂÊÎÔÛÃÕÀÄËÏÖÜ]/g, (vogal) => vogal + vogal))
}

console.log(duplicaVogais(palavras))
