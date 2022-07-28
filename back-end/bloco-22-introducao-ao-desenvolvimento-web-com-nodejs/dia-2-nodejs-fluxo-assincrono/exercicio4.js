const fsAsinc = require('fs').promises; //assíncrono

//TODO Exercício 4 ------------------------------

function IdValidator(id, data){
  const promise = new Promise((resolve, reject) => {
    const characterMatch = data.filter((character) => character.id === id);
    if(characterMatch.length === 0)  reject(new Error('Id não encontrado'));
    resolve(characterMatch);
  })
  return promise;
}

// }
// leitura de arquivo síncrona
// function SimpsonsCharacterSinc(idMatch){
//   fsSinc.readFile("./simpsons.json", 'utf-8', function(err, data){
//     if(err){
//       console.log('Não foi possível ler o arquivo');
//       return false;
//     } 
//     try {
//       const simpsonsData = JSON.parse(data);
//       const simpsonsArray = simpsonsData.map((character) => (
//         `${character.id} - ${character.name}`
//       ));
//       console.log(simpsonsArray);
//       IdValidator(idMatch, simpsonsData)
//         .then(result => console.log(result))
//         .catch(err => console.log(`Erro: ${err}`));
//     } catch(err) {
//       console.log(`Erro: ${err}`);
//     }
//   });
// };

// SimpsonsCharacterSinc('10');
//TODO Exercício 4 ----------------------
const simpsonsJson = './simpsons.json';
// // leitura de arquivo assíncrona com .then
// function SimpsonsCharacterAsincThen(idMatch){
//   console.log('leitura de arquivo assíncrona com .then');
//   fsAsinc.readFile(simpsonsJson, 'utf-8')
//     .then((data) => {
//       const simpsonsData = JSON.parse(data);      
//       IdValidator(idMatch, simpsonsData)
//         .then(result => console.log(result))
//         .catch(err => console.log(`Erro: ${err}`));
//     })
//     .catch((err) => {
//       console.log(`Erro: ${err}`);
//       console.error(`Não foi possível ler o arquivo ${simpsonsJson} \n Erro: ${err}`)
//     })  
// };

// SimpsonsCharacterAsincThen('2');

//TODO Exercício 4 -------------------------------------
// leitura de arquivo assíncrona com async/await
// async function SimpsonsCharacterAsincAsincAwait(id){
//   console.log('leitura de arquivo assíncrona com async/await');
//   const data = await fsAsinc.readFile(simpsonsJson, 'utf-8');
//   const simpsonsData = JSON.parse(data);
//   const characterMatch = simpsonsData.filter((character) => character.id === id);
//   if(characterMatch.length === 0)  throw new Error('Id não encontrado');
//   return characterMatch;   
// };

// SimpsonsCharacterAsincAsincAwait('11');

//TODO Exercício 4 -------------------------------------

// leitura de arquivo assíncrona com async/await e try catch
async function SimpsonsCharacterAsincAsincAwaitTryCatch(id){
console.log('leitura de arquivo assíncrona com async/await e try catch');
try {
  const data = await fsAsinc.readFile(simpsonsJson, 'utf-8');
  const simpsonsData = JSON.parse(data);
  const characterMatch = simpsonsData.filter((character) => character.id === id);
  if(characterMatch.length === 0) throw new Error('Id não encontrado');
  return characterMatch;
} catch(err) {
  console.log(`${err}`);
}    
};

SimpsonsCharacterAsincAsincAwaitTryCatch('11');

//TODO Exercício 4 
//TODO -> Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6. <-
//! Fazendo agora...
// Editando simpson.js assíncrono com async/await e try catch
async function RemoveSimpsonsCharactersById(id){
  console.log('remove personagem de simpson.js assíncrono com async/await e try catch');
  try {
    if(typeof id !== 'string') throw new Error('formato invalido para "id". Sring é requerido');
    const data = await fsAsinc.readFile(simpsonsJson, 'utf-8');
    const simpsonsData = JSON.parse(data);
    const characterChoosen = simpsonsData.filter((character) => character.id === id);
    const characterChoosenId = JSON.stringify(characterChoosen.id);
    const characterChoosenName = JSON.stringify(characterChoosen.name);
    const newSimpsonData = simpsonsData.filter((character) => character.id !== id);  
    const fileEdited = await fsAsinc.writeFile(simpsonsJson, newSimpsonData); 
    return console.log(`${simpsonsJson} editado com sucesso. Personagem ${characterChoosenName} de id ${characterChoosenId} removido`);
  } catch(err) {
    console.log(`Erro ao editar o arquivo: ${err}`);
  }    
  };
  
  RemoveSimpsonsCharactersById('1');
