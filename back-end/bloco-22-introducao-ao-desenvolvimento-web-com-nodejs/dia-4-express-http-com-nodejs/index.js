const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.get('/', (request, response) => {
  return response.send('Olá');
})

app.get('/ping', (request, response) => {
  return response.status(200).json({ message: 'pong'});
})

app.post('/hello', (request, response) => {
  const { name } =  request.body;
  request.json(nameJson);
  return response.status(200).json( { "message": `"Hello, ${name}` });
})

app.post('/greetings', (request, response) => {
  const { name, age } = request.body;
  if(+age > 17) {
    return response.status(200).json({ "message": `"Hello, ${name}!"`});
  }
  if(+age <= 17) {
    return response.status(404).json({ "message": "Unauthorized"})
  }
})

app.put('')

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
})