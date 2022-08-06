const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'root',
  password: 'DsVn19903662.',
  host: 'localhost',
  database: 'model_example'
});

module.exports = connection;