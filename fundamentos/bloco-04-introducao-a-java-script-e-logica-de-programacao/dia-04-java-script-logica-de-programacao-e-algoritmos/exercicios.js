// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:

// n = 5

// *****
// *****
// *****
// *****
// *****

// let n = 5;
// let line = "";
// let symbol = '*';
// for (let i = 1; i <= n ; i += 1) {
//     line = line + symbol;
// }
// for (let i = 1; i <= n; i += 1) {
//     console.log(line);
// }

// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

// n = 5

// *
// **
// ***
// ****
// *****

let symbol = '*';
// let line = '';
let n = 5;
for (let i = 1; i <= n; i += 1) {
    line = '';
    for (let j = 1; j <= i; j += 1) {
        line = line + symbol;
    }
    console.log(line);
}