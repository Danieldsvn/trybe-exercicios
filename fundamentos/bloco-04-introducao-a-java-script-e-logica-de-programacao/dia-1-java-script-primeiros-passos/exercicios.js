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
/* chessPieceAnyCase = "KNIGHT";
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
} */
/*Exercicio 7
 Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.*/

/* let porcentagem = -1;

if ( porcentagem >= 90 && porcentagem <= 100) {
    console.log("A");
}
else if ( porcentagem >= 80 && porcentagem < 90) {
    console.log("B");
}
else if ( porcentagem >= 70 && porcentagem < 80) {
    console.log("C");
}
else if ( porcentagem >= 60 && porcentagem < 70) {
    console.log("D");
}
else if ( porcentagem >= 50 && porcentagem < 60) {
    console.log("E");
}
else if (porcentagem >= 0 && porcentagem < 50) {
    console.log("F");
}
else {
    console.log("Valor inválido. Fechando programa...")
}
 */

/*Exercicio 8
Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
Bonus: use somente um if .*/

/* const a = 1;
const b = 3;
const c = 5;

let isEven = false;

if (a % 2 == 0 || b % 2 == 0 || c % 2 == 0) {
    isEven = true;
}
console.log(isEven); */

/*Exercicio 9
Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
Bonus: use somente um if  .*/

/* const a = 6;
const b = 4;
const c = 2;

let isOdd = false;

if (a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0) {
    isOdd = true;
}
console.log(isOdd); */

/*Exercicio 10
Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
Atente que, sobre o custo do produto, incide um imposto de 20%.
Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
valorCustoTotal = valorCusto + impostoSobreOCusto
lucro = valorVenda - valorCustoTotal (lucro de um produto)  .*/

/* const custo = 100;
const venda = 200;
if (custo > 0 && venda > 0){
    let imposto = 1.2;
    let custoTotal = custo * 1.2;
    let lucro = venda - custoTotal;
    let lucroTotal = 1000 * lucro;
    console.log(lucroTotal);
}
else {
    console.log("Valor(es) inválido(s)");
} */
/*Exercicio 11
Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
INSS (Instituto Nacional do Seguro Social)
Salário bruto até R$ 1.556,94: alíquota de 8%
Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
IR (Imposto de Renda)
Até R$ 1.903,98: isento de imposto de renda
De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
Exemplo : Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:
O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:
R$ 2.670,00: salário com INSS já deduzido;
7.5%: alíquota de imposto de renda;
R$ 142,80 parcela a se deduzir do imposto.
Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45
O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.
Resultado: R$ 2.612,55.
Dica: que tal identificar as alíquotas com variáveis de nomes explicativos? .*/

const sBruto = 3000;
// validando valor de entrada
if (salarioBruto <= 0) {
    console.log("Valor inválido.")
}
// calculando salario base(após INSS)
else {
    const sBase = sBruto;    
    if (sBruto <= 1556.94) {
        sBase = sBase * 0.92;
    }
    else if (sBruto >= 1556.95 && sBruto <= 2594.92) {
        sBase = sBase * 0.91;
    }
    else if (sBruto >= 2594.93 && sBruto <= 5189.82) {
        sBase = sBase * 0.89;
    }
    else {
        sBase = sBase - 570.88;
    }
    //calculando salario liquido(após IR)
    const sLiquido = sBase;
    if (sBase >= 1903.99 && sBase <= 2826.65) {
        sLiquido = sLiquido - (sLiquido * 0.075 - 142.80);
    }
    else if (sBase >= 2826.66 && sBase <= 3751.05) {
        sLiquido = sLiquido - (sLiquido * 0.15 - 354.80);
    }
    /* PRECISA EDITAR VALORES else if (sBase >= 1903.99 && sBase <= 2826.65) {
        sLiquido = sLiquido - (sLiquido * 0.075 - 142.80);
    }
    if (sBase >= 1903.99 && sBase <= 2826.65) {
        sLiquido = sLiquido - (sLiquido * 0.075 - 142.80); */
    }
}
    
    
