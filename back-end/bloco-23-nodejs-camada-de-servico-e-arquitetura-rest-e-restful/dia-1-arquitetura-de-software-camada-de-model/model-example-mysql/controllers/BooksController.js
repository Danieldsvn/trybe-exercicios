const Book = require('../services/Book');

const getAll = async (request, response) => {
  const books = await Book.getAll();
  
  response.status(200).json(books);
};


const getById = async (request, response) => {
  const { id } = request.params;
  const book = await Book.getById(id);  
  
  if(book.error) return response.status(book.error.code).json({ message: book.error.message} );
  
  return response.status(200).json(book);
};

const getByAuthorId = async (request, response) => {
  const { authorId } = request.params;
  const book = await Book.getByAuthorId(authorId);  

  if(book.error) return response.status(book.error.code).json({ message: book.error.message});

  return response.status(200).json(book);
};

const create = async (request, response) => {
  const { title, author_id } = request.body;
  const book = await Book.create(title, author_id);
  if(book.error) return response.status(book.error.code).json( {message: book.error.message});
  
  return response.status(201).json(book);
};

module.exports = {
  getAll,
  getByAuthorId,
  getById,
  create,
};