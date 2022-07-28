const fs = require('fs');

function IdValidator(id, data){
  const promise = new Promise((resolve, reject) => {
    const characterMatch = data.filter((character) => character.id === id);
    if(characterMatch.length === 0)  reject(new Error('Id não encontrado'));
    resolve(characterMatch);
  })
  return promise;
}


function SimpsonsCharacter(idMatch){
  fs.readFile("./simpsons.json", 'utf-8', function(err, data){
    if(err){
      console.log('Não foi possível ler o arquivo');
      return false;
    } 
    try {
      const simpsonsData = JSON.parse(data);
      const simpsonsArray = simpsonsData.map((character) => (
        `${character.id} - ${character.name}`
      ));
      console.log(simpsonsArray);
      IdValidator(idMatch, simpsonsData)
        .then(result => console.log(result))
        .catch(err => console.log(`Erro: ${err}`));
    } catch(err) {
      console.log(`Erro: ${err}`);
    }
  });
};

async function main(idMatch) {
  try {
    const result = await SimpsonsCharacter(idMatch);    
    console.log(result);
  } catch(err) {
    console.log(`Erro: ${err}`)
  }
};

main('11');


function soma (num1, num2, num3) {
  const promise = new Promise((resolve, reject) => {
    if(typeof num1 !== "number" || typeof num2 !== "number" || typeof num3 !== "number" ) {
      reject(new Error("Informe apenas números"));
    };
    const resultado = (num1 + num2) * num3;
    if(resultado < 50) reject(new Error('Valor muito baixo'));   
    resolve(resultado);
  })
  return promise;  
}

// Consumindo promise com .then

const numeroAleatorio = () => Math.floor(Math.random() * 10 + 1);
// soma(numeroAleatorio(),numeroAleatorio(), numeroAleatorio())
//   .then(result => console.log(result))
//   .catch(err => console.log("Erro:", err.message))

// consumindo promise com async await

// async function main(){
//   try {
//     const result = await soma(numeroAleatorio(),numeroAleatorio(), numeroAleatorio());
//     console.log(result);
//   } catch(err) {
//     console.log(`${err}`);    
//   }  
// }

// main();

