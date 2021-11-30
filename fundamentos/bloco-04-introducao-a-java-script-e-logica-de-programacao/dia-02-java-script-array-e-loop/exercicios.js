
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



//*Solução 1
 /* let sum = 0;

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
} */

//*Solução 2

// ! 5 - Utilizando for , descubra qual o maior valor contido no array e imprima-o;



//*Solução 1
/* let min = numbers[0];
for (let i = 0; i < numbers.length; i += 1) {
    if ( min > numbers[i] ) {
        min = numbers[i]; 
    }
} 
console.log(min); */
//*Solução 2

// ! 6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";


//*Solução 1
/* let oddCounter = 0;
for (let i = 0; i < numbers.length; i += 1) {
    if ( numbers[i] % 2 !== 0 ) {
        oddCounter += 1;  
    }
}
if (oddCounter !== 0) {
    console.log(oddCounter);
} 
else {
    console.log('nenhum valor ímpar encontrado');
} */

//*Solução 2

// ! 7 - Utilizando for , descubra qual o menor valor contido no array e imprima-o;


//*Solução 1
/* let max = numbers[0];
for (i of numbers) {
    if (max < i) {
        max = i;
    }
}
console.log(max);
//*Solução 2
 */
// ! 8 - Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;


//*Solução 1
/* let array25 = [];
for (let i = 1; i <= 25; i += 1) {
    array25.push(i);
}
console.log(array25); */
//*Solução 2

// ! 9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .


//*Solução 1
/* for (let j = 0; j < array25.length; j += 1) {
    console.log(array25[j] / 2);
} */
//*Solução 2

// ! Bonus 1 - Ordene o array numbers em ordem crescente e imprima seus valores;

/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
 */
//*Solução
/* for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbers[index] < numbers[secondIndex]) {
        let position = numbers[index];
        numbers[index] = numbers[secondIndex];
        numbers[secondIndex] = position;
      }
    }
  }
console.log(numbers);   */

// ! Bonus 2 - Ordene o array numbers em ordem decrescente e imprima seus valores;

/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]; */

//*Solução
/* for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbers[index] > numbers[secondIndex]) {
        let position = numbers[index];
        numbers[index] = numbers[secondIndex];
        numbers[secondIndex] = position;
      }
    }
  }
console.log(numbers);   */

// ! Bonus 3 - Agora crie um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push . O resultado deve ser o array abaixo:

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//*Solução

let numbers2x = [];
for (let i = 0; i < numbers.length - 1; i += 1) {
    numbers2x.push(numbers[i] * numbers[i + 1]);
}
numbers2x.push((numbers[numbers.length -1]) * 2);
console.log(numbers2x);


  