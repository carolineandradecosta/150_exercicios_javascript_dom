/*
16 - Crie um script que declare um array de números e utilize um loop while para calcular a soma de todos os números do array. Imprima o resultado.
*/

const numeros = Array.from({length:55}, (_,index) => index+1);

let i = 0;
let soma = 0;
while (i< numeros.length) {
    soma += numeros[i]
    i++
}

console.log("Soma dos números:", soma)

