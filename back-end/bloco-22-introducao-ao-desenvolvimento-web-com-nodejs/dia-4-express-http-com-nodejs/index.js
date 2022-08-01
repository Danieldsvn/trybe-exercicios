const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.get('/', (request, response) => {
  return response.send('Olá');
})

app.get('/ping', (request, response) => {
  return response.json({ message: 'pong'});
})

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
})