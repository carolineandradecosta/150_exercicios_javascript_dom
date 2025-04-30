/*
13 - Crie um script que declare uma variável var largura e atribua a ela um valor numérico. Declare uma função que calcule a largura ao cubo e imprima o resultado.
*/

var largura = 60.7;

function calcularLarguraAoCubo () {
    let larguraAoCubo = (Math.pow(largura, 3)).toFixed(1);
    console.log(`A largura ${largura} ao cubo é: ${larguraAoCubo}`);
}

calcularLarguraAoCubo();
