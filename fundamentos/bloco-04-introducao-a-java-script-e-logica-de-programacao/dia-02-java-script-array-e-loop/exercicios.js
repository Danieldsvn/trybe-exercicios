
// ! 1 - Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

//*Solução 1
/* for (let i = 0; i < numbers.length; i += 1 ) {
    console.log(numbers[i]);
} */
//*Solução 2
/* for (let i of numbers) {
    console.log(i);
}
 */


// ! 2 - Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

//*Solução 1
/* let sum = 0;
for( let i = 0; i < numbers.length; i += 1) {
    sum = sum + numbers[i];
}
console.log(sum); */
//*Solução 2
/* let sum = 0;
for (let number of numbers){
    sum = sum + number
}
console.log(sum); */

// ! 3 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;



//*Solução 1
/* let sum = 0;

for (let i = 0; i < numbers.length; i += 1) {
    sum = sum + numbers[i];
}
let mean = sum / numbers.length
console.log(mean); */
//*Solução 2
/* let sum = 0;

for (let i of numbers) {
    sum = sum + i;
}
let mean = sum / numbers.length
console.log(mean); */

// ! 4 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//*Solução 1
 let sum = 0;

for (let i = 0; i < numbers.length; i += 1) {
    sum = sum + numbers[i];
}
let mean = sum / numbers.length
console.log(mean); 
if (mean > 20) {
    console.log('valor maior que 20');
}
else {
    console.log('valor menor ou igual a 20');
}

//*Solução 2


