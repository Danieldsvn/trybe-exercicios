const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const moment = require('moment');

app.post('/sales', (request, response) => {
  const { productName, infos } = request.body;
  if(!productName) return response.status(400).json({ message: "O campo productName é obrigatório"});
  if(productName.length < 4) return response.status(400).json({ message: "O campo productName deve ter pelo menos 4 caracteres"});
  if(!infos) return response.status(400).json({ message: "O campo infos é obrigatório"});
  if(typeof infos !== 'object') return response.status(400).json({ message: "O campo infos é não é um objeto"}); 
  if(!infos.saleDate) return response.status(400).json({ message: "O campo saleDate é obrigatório"});
  const isDateValid = moment(infos.saleDate, 'DD/MM/YYYY', true).isValid();
  if(!isDateValid) return response.status(400).json({ message: "salesDate não é uma data válida"});
  if(!infos.warrantyPeriod) return response.status(400).json({ message: "O campo warrantyPeriod é obrigatório"});
  if(typeof infos.warrantyPeriod !== 'number') return response.status(400).json({ message: "O campo warrantyPeriod deve ser do tipo numérico"});
  if(!(Number.isInteger(infos.warrantyPeriod))) return response.status(400).json({ message: "O campo warrantyPeriod deve ser do tipo inteiro"});
  if(infos.warrantyPeriod > 3 || infos.warrantyPeriod < 1) return response.status(400).json({ message: "O campo warrantyPeriod precisa estar entre 1 e 3"});
  return response.status(201).json({ message: "Venda cadastrada com sucesso"});
})

function TokenGenerator() {
  let token = '';
  var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let index = 0; index < 27; index += 1) {
      token += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
  }
  return token;
}

app.post('/signup', (response, request) => {
  const { email, password, firstName, phone } = request.user;
  if(!email || !password || !firstName || phone) {
    return response(401).json({ message: 'missing fields'});
  }
  const randomToken = TokenGenerator();
  return response.status(200).json({ token: randomToken })
})

app.listen(3001, () => console.log("Ouvindo porta 3001"));