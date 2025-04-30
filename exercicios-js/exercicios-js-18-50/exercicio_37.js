/*
37 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string esteja invertida. Utilize a função reverse() para inverter as strings.
*/

const numerosString = [`um`, `dois`, `três`, `quatro`];

const arrayInvertido = numerosString.map(nome => nome.split(``).reverse().join(``));

console.log(arrayInvertido);

