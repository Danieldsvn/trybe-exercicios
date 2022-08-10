const connection = require('./connection');

const Book = require('../services/Book');
const serialize = (bookData) => {
  return {
    id: bookData.id,
    title: bookData.title,
    authorId:  bookData.author_id
  }  
}

const getAll = async () => {
  const [books] = await connection.execute('SELECT id, title, author_id FROM books');
  return books.map(serialize);
}

const getByAuthorId = async (authorId) => {
  const query = 'SELECT id, title, author_id FROM books WHERE author_id = ?'
  const [books] = await connection.execute(query, [authorId]);
  return books.map(serialize);
}

const getById = async (id) => {
  const query = 'SELECT id, title, author_id FROM books WHERE id = ?'
  const [books] = await connection.execute(query, [id]);
  return books.map(serialize);
}

const create = async (title, authorId) =>  connection.execute('INSERT INTO model_example.books (title, author_id) VALUES (?, ?)', [title, authorId]);

module.exports = {
  getAll,
  getByAuthorId,
  getById,
  create,  
};