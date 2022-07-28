
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

async function main(){
  try {
    const result = await soma(numeroAleatorio(),numeroAleatorio(), numeroAleatorio());
    console.log(result);
  } catch(err) {
    console.log(`${err}`);    
  }  
}

main();

