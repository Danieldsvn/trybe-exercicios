const Book = require('../models/Book');

const exist = (title, authorId, books) => {    
  const bookExist = books.some((book) => {
    return book.title === title && book.authorId === authorId
  });
  if(!(bookExist))return false;  
  return true;
}

const badRequest = 400;
const notFound = 404;
const conflict = 409;

const getAll = async () => Book.getAll();

const getById  = async (id) => {
  const book = await Book.getById(id);

  if(book.length === 0) {
    return {
      error: {
        code: notFound,
        message: 'Livro não encontrado',
      },
   };
  }

  return book;
}
const getByAuthorId = async (authorId) => {
  const book = await Book.getByAuthorId(authorId);
  if(book.length === 0) {
    return {
      error: {
        code: notFound,
        message: 'Livro não encontrado',
      },
   };
  }

  return book;
}


const create = async(title, authorId) => {
  if(!title || title.length < 3) {
    return {
      error: {
        code: badRequest,
        message: 'Título menor que 3 caracteres',
      },
   };
  }
  const books = await getAll();
  if(!exist(title, authorId, books)) {
    return {
      error: {
        code: conflict,
        message: 'Livro já existe',
      },
   }; 
  }

  return Book.create(title, authorId) 
};

module.exports = {
  getAll,
  getByAuthorId,
  getById,
  create,
};
