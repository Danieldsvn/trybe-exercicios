/* Exercício 1
Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:
Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b)*/

/*Adição
const a = 3;
const b = 4;
console.log("adição: " + (a + b));
console.log('subtração: ' + (a - b));
console.log('multiplicação: ' + (a * b));
console.log('divisão: ' + (a / b));
console.log('módulo: ' + (a % b));*/

/* Exercício 2
Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.*/

/* const a = 8;
const b = 8;
if( a > b) {
    console.log(a + " é o maior número ");
}
else {
    console.log(b + " é o maior número");
} */

/*Exercicio 3
 Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
 */

 //solução 1
 /* const a = 65;
 const b = 70;
 const c = 68;

 if (a > b) {
     if (a > c) {
         console.log(a + " é o maior número");
     }
     else {
         console.log(c + " é o maior número");
     }     
 }
 else {
     if (b > c) {
         console.log(b + " é o maior número");
     }
     else {
         console.log(c + " é o maior número");
     }
 } */
 //Solução 2:
 
 /* const a = 9;
 const b = 5;
 const c = 3;

 if (a > b && a > c) {
     console.log(a + " é o maior número")
 }
 else if (b > a && b > c) {
    console.log(b + " é o maior número");
 }
 else{
    console.log(c + " é o maior número");
 }  */

 /*Exercicio4
 Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.*/

 //Solução:
/*  const a = -3;
 if (a > 0) {
     console.log("positive");
 }
 else if (a < 0) {
    console.log("negative");
}
else {
    console.log("zero");
} */

/*Exercicio 5
 Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.*/

 //Solução:
 /* const a = 90;
 const b = 45;
 const c = 45;
 if (a > 0 && b > 0 && c > 0) {

    if (a + b + c == 180) {
        console.log("true");
        
    }
    else {
        console.log("false");
    }
} 
else {
    console.log("erro");
} */
/*Exercicio 6
 Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
Exemplo: bishop (bispo) -> diagonals (diagonais).*/

 //Solução:
chessPieceAnyCase = "KNIGHT";
chessPiece = chessPieceAnyCase.toLowerCase();
 if (chessPiece == "pawn") {
     console.log("vertically forward one square");
 }
 else if (chessPiece == "bishop") {
    console.log("diagonally any number of squares");
}
else if (chessPiece == "rook") {
    console.log("horizontally or vertically any number of squares");
}
else if (chessPiece == "knight") {
    console.log("in an ‘L’ shape’: two squares in a horizontal or vertical direction, then move one square horizontally or vertically");
}
else if (chessPiece == "queen") {
    console.log("diagonally, horizontally, or vertically any number of squares");
}
else if (chessPiece == "king") {
    console.log("one square in any direction, so long as that square is not attacked by an enemy piece. Additionally, kings are able to make a special move, known as castling.");
}
else {
    console.log("Erro: peça inválida")
}
