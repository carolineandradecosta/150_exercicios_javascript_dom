/* 
9 - Escreva um programa que imprima os números de 1 a 100. Mas, para múltiplos de 3, imprima "Fizz" em vez do número e, para múltiplos de 5, imprima "Buzz". Para números que são múltiplos de ambos 3 e 5, imprima "FizzBuzz".
*/

for (i=1; i<101; i++){
    if(i % 3 == 0) {
        console.log(`${i} Fizz`)
    } else if(i % 5 == 0) {
        console.log(`${i} Buzz`)
    } else if (i % 3 == 0 && i % 5 == 0) {
        console.log(`${i} FizzBuzz`)
    } else {
        console.log(`${i}`)
    }
}

