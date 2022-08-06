const connection = require('./connection');

const serialize = (userData) => {
  return {
    id: userData.id,
    firstName: userData.first_name,
    lastName: userData.last_name,
    email: userData.email,
    password: userData.password,    
  }  
}

const existData = (firstName, lastName, email, password) => {
  if(!firstName || !lastName || !email || !password) {
    return false;
  }  
  return true;
}

const isPasswordValid = (password) => {
  if(password.length < 6) return false;
  return true;
}

const create = async (firstName, lastName, email, password) => {
  return await connection.execute('INSERT INTO model_example.users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)', [firstName, lastName, email, password]);
}

const getAll = async () => {
  const [users] = await connection.execute('SELECT id, first_name, last_name, email, password FROM users');

  return users.map(serialize);
}

module.exports = {
  existData,
  isPasswordValid,
  create,
  getAll,
}