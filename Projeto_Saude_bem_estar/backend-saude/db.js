//conexao banco de dados

const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: 'saude_bem_estar',
  port: 3306
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao MariaDB:', err);
    return;
  }
  console.log(' Conectado ao banco de dados');
});

module.exports = connection;
