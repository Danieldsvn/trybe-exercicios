const readline = require('readline-sync');

console.log("Calculadora IMC");

const peso = readline.questionFloat('Digite o peso em kg: ');
const altura = readline.questionFloat('Digite o altura em metros: ');
const resultado = (peso / (altura * altura)).toFixed(2); 
console.log('Seu IMC é: ');
console.log(resultado);
if(resultado < 18.5) console.log('Abaixo do peso');    
if(resultado >= 18 && resultado <= 24.9 ) console.log('Normal');    
if(resultado >= 25 && resultado <= 29.9) console.log('Acima do peso');    
if(resultado >= 30 && resultado <= 34.9) console.log('Obesidade grau I');    
if(resultado >= 35 && resultado <= 39.9 )console.log('Obesidade grau II');    
if (resultado >= 40) console.log('Obesidade graus III e IV');
  
