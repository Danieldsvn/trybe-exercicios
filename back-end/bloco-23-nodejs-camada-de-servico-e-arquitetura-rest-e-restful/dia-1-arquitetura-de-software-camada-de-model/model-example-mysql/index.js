const express = require('express');
const app = express();
const rescue = require('./rescue');
app.use(express.json());
const port = 3000

const Author = require('./models/Author');
const Book = require('./models/Book');
const User = require('./models/User');

app.get('/authors', async (request, response) => {
  const authors = await Author.getAll();

  response.status(200).json(authors);
});


app.get('/books', async (request, response) => {
  const books = await Book.getAll();
  
  response.status(200).json(books);
});


app.get('/books/:id', async (request, response) => {
  const { id } = request.params;
  const books = await Book.getById(id);  
  
  if(books.length === 0) return response.status(404).json({ message: 'book not found!'});
  
  return response.status(200).json(books);
});

app.get('/books/authors/:authorId', async (request, response) => {
  const { authorId } = request.params;
  const books = await Book.getByAuthorId(authorId);  

  if(books.length === 0) return response.status(404).json({ message: 'book not found!'});

  return response.status(200).json(books);
});

app.post('/authors', async (request, response) => {
  const { first_name, middle_name, last_name } = request.body;
  if(!Author.isValid(first_name, middle_name, last_name)) {
    return response.status(400).json({ message: "invalid name!"});
  } 
  await Author.create(first_name, middle_name, last_name);

  return response.status(201).json({ message: 'Author created sucessfuly!'});
})

app.post('/books', rescue(async (request, response) => {
  const authors = await Author.getAll();
  const { title, author_id } = request.body;
  if(!(Book.isValid(title, author_id, authors))) return response.status(400).json({ message: 'Dados inválidos'});
  await Book.create(title, author_id);
  return response.status(201).json({ message: 'Livro criado com sucesso!' })
}));

app.post('/user', rescue(async (request, response) => {
  const { firstName, lastName, email, password } = request.body;
  if(!(User.existData(firstName, lastName, email, password))) return response.status(400).json({ message: 'dados incompletos!'});
  if(!(User.isPasswordValid(password))) return response.status(400).json({ message: 'password com menos de 6 caracteres'});
  await User.create(firstName, lastName, email, password);    
  return response.status(201).json(request.body);
}));

app.listen(port, () => console.log(`Listening to the port ${port}`));
