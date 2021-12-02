/*  PARA FIXAR "OBJETO"
Agora vamos fazer alguns exercícios de fixação para consolidar os conhecimentos adquiridos no video anterior! 😉  */

// ! 1 - Crie um objeto player contendo as variáveis listadas abaixo.

// let name = 'Marta';
// let lastName = 'Silva';
// let age = 34;
// let medals = { golden: 2, silver: 3 };

// let player = {
//     name: 'Marta',
//     lastName: 'Silva',
//     age: '34',
//     medals: {
//         golden: 2,
//         silver: 3,
//     },
// };

// ! 2 - Acesse as chaves name , lastName e age e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".

// console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade');

// ! 3 - Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.

// [2006, 2007, 2008, 2009, 2010, 2018]
// player.bestInTheWold = [2006, 2007, 2008, 2009, 2010, 2018];
// console.log(player.bestInTheWold);
// console.log(player);

// ! 4 - Acesse a chave bestInTheWorld e faça um console.log no seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".

// console.log('A jogadora ' + player.name + ' ' + player.lastName + ' foi eleita a melhor do mundo por ' + player.bestInTheWold.length + ' vezes');


// ! 5 - Acesse a chave medals e faça um console.log no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".

// console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata.');

//------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

// PARA FIXAR  "FOR/IN" //

// let cars = ['Saab', 'Volvo', 'BMW'];

// for (let index in cars) {
//   console.log(cars[index]);
// }

// let car = {
//     type: 'Fiat',
//     model: '500',
//     color: 'white',
//   };
  
//   for (let index in car) {
//     console.log(index, car[index]);
//   }
// ! 1 - Usando o objeto abaixo, utilize For/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.

/* let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge' 
};

for (let index in names){
    console.log('Olá ' + names[index]);
} */

// ! 2 - Usando o objeto abaixo, utilize For/in e imprima um console.log com as chaves e valores desse objeto.

/* let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for (let index in car){
      console.log(index + ': ' + car[index]);
  } */

  // PARA FIXAR  "FUNÇÕES" //
//! FAÇA FUNÇÕES PARA CADA EXERCÍCIO ABAIXO.

//  ! 1. Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:
/* // Adição (a + b)
function soma(a, b){
    return a + b;
}
// Subtração (a - b)
function subtracao(a, b){
    return a - b;
}
// Multiplicação (a * b)
function multiplicacao(a, b){
    return a * b;
}
// Divisão (a / b)
function divisao(a, b){
    return a / b;
}
// Módulo (a % b)
function resto(a, b) {
    return a % b;
} */

// !2. Faça um programa que retorne o maior de dois números. Defina no começo do programa duas  constantes com os valores que serão comparados.

/* function maiorNumero (a, b){
    if (a > b) {
        return a;
    }   
    else if (b > a) {
        return b;
    }
    else {
        return 'números iguais';
    }
}
 */
// ! 3. Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

/* function MaiorDe3 (a, b, c) {
    if (a > b && a > c) {
        return a + ' é o maior número';
    }
    else if (b > a && b > c) {
        return b +  ' é o maior número';
    }
    else {
        return c + ' é o maior número';
    }
} */

// ! 4. Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

/* function posNeg(a) {
    if (a > 0){
        return 'positive';
    }
    else if (a < 0){
        return 'negative';
    }
    else {
        return 'zero';
    }
} */

// ! 5. Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

function triAngulos(a, b, c){
    if (a < 0 || b < 0 || c < 0) {
        return 'angulo(os) invalidos';
    }
    else {
        if ( a + b + c !== 180) {
            return false;
        }
        else {
            return true;
        }
    }
}

console.log(triAngulos(-60, 60, 60));
