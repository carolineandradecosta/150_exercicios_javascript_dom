/* Exercício 01 */

const cpf = "123.456.789-10";
var nome = "Caroline";

function exibirSobrenome() {
    let sobrenome = "Andrade Costa";
    return sobrenome;
}

console.log(`Nome: ${nome}`);
console.log(`Sobrenome: ${exibirSobrenome()}`);
console.log(`CPF: ${cpf}`)

console.log(`Nome: ${nome}, Sobrenome: ${exibirSobrenome()}, CPF: ${cpf}`);