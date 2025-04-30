/*
15 - Crie um script que declare um array de nomes de frutas e utilize um loop for para imprimir cada fruta em uma linha separada.
*/

const frutas = ["laranja", "uva", "banana", "melancia"]

for(i=0; i<4; i++){
    console.log(`${frutas[i]}`)
}

/* Outra alternativa: */
for(let fruta of frutas){
    console.log(fruta)
}
