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

// ! 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

// n = 5

// *
// **
// ***
// ****
// *****

//* Solução 1
/* let symbol = '*';

let n = 5;
for (let i = 1; i <= n; i += 1) {
    line = '';
    for (let j = 1; j <= i; j += 1) {
        line = line + symbol;
    }
    console.log(line);
}
//* Solução 2
let n = 5;
let symbol = '*';
let line = '-';
for (i = 0; i <= n; i += 1) {
    console.log(line);
    line = line + symbol;
} */
// ! 3- Agora inverta o lado do triângulo. Por exemplo:
// 
//     *
//    **
//   ***
//  ****
// *****
// TODO Atenção! Note que esse exercício é bem mais complexo que o anterior! Não basta, aqui, imprimir somente asteriscos. Você precisará de uma lógica para imprimir espaços também.

// * Solução 1 (ajuda do Gabriel Pondaco)

/* let n = 5;
let symbol = '*';
let line = '';
let array = [];
for(let i = 1; i <= n; i += 1) {
    for( let j = 1; j <= n; j += 1) {
        if (j > i) {
            array.push(' ');
        }
        else {
            array.push('*');
        }
        
    }
    array.reverse();
    console.log(array.join(''));

    array = []; */


// * Solução 2 

let n = 5;
let asterisk = '*';
let blankCha = ' ';

for (let i = 1; i <= n; i += 1) {   // imprime as "n" linhas.    
    let line = ''; // recebe variaveis asterisk e blankCha.     
    for (let j = 4; j >= i; j -= 1){ // armazena os caracteres vazios na variavel linha
        line = line + blankCha;
    }    
    for ( j = 1; j <= i; j += 1){ // armazena os asteriscos na variavel linha
        line = line + asterisk;
    }         
    console.log(line); // Imprime cada linha das "n" linhas
}









