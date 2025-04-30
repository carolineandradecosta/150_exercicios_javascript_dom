/*
14 - Crie um script que declare uma variável const base e atribua a ela um valor numérico. Declare uma função que calcule a área de um triângulo usando a base e uma altura fornecida como parâmetro e imprima o resultado.
*/

const base = 25.81

function calcularAreaTriangulo(altura){
    console.log(`Área do Triângulo: ${((base * altura)/2).toFixed(2)}`)
}

calcularAreaTriangulo(15.4)
