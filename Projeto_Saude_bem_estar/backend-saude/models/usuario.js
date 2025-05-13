const db = require('../db');

function verificarLogin(email, senha, callback) {
  const sql = 'SELECT * FROM usuario WHERE email = ? AND senha = ?';
  db.query(sql, [email, senha], (err, results) => {
    if (err) return callback(err, null);
    if (results.length > 0) return callback(null, results[0]); // Login OK
    else return callback(null, null); // Login errado
  });
}

module.exports = { verificarLogin };
