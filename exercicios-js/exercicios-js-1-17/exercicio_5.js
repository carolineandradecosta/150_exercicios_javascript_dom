/* Exercício 05 */

const carreira = "engenheira de software";

function objetivoDeCarreira(nomeDaCarreira){
    return `Meu objetivo de carreira é me tornar uma ${nomeDaCarreira}`;
}

console.log(objetivoDeCarreira(carreira));

/*Com arrow function */

const objetivoDeCarreira2 = (nomeDaCarreira) => {return `Meu objetivo de carreira é me tornar uma ${nomeDaCarreira}`};

console.log(objetivoDeCarreira2(carreira));
