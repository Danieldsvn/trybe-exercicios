const readline = require('readline-sync');
const { message1, message2, message3 } = require('./messages');

console.log('CALCULADORA BASICA');

function calculadora() {
  const primeiroNumero = readline.questionInt(message1());
  const operador = readline.question(message2());
  const segundoNumero = readline.questionInt(message3());  
  switch(operador) {
    case '+':
    case 'mais':
    case 'adição':
      console.log('Resultado:');
     console.log(primeiroNumero + segundoNumero);
    break;
    case '-':
    case 'menos':
    case 'subtração':
      console.log('Resultado:');
      console.log(primeiroNumero - segundoNumero);
      break;
    case '*':
    case 'vezes':
    case 'multiplicação':
      console.log('Resultado:');
      console.log(primeiroNumero * segundoNumero);
      break;
    case '/':
    case 'dividido':
    case 'divisão':
      console.log('Resultado');
      console.log(primeiroNumero / segundoNumero);
      break;
    default: 
    console.log('Operador errado!');     
  }  
};

calculadora();

// const name = readline.question('Qual seu nome? ');
// const age = readline.questionInt('Qual sua idade? ');

// console.log('hello World!');

// console.log(`Hello, ${name}! You are ${age} years old!`);