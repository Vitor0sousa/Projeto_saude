

const express = require('express');
const router = express.Router();
const db = require('../db');


router.post('/cadastro', (req, res) => {
  console.log('🟢 Dados recebidos no back-end:', req.body);
  const { nome, login, senha, email } = req.body;
  const query = 'INSERT INTO usuario (nome, login, senha, email) VALUES (?, ?, ?, ?)';
  db.query(query, [nome, login, senha, email], (err, result) => {
    if (err) return res.status(500).json({ erro: err });
    res.status(201).json({ msg: 'Usuário cadastrado com sucesso!' });
  });
});


router.get('/usuarios', (req, res) => {
  db.query('SELECT * FROM usuario', (err, results) => {
    if (err) return res.status(500).json({ erro: err });
    res.status(200).json(results);
  });
});


router.put('/senha/:id', (req, res) => {
  const { id } = req.params;
  const { novaSenha } = req.body;

  const query = 'UPDATE usuario SET senha = ? WHERE id = ?';
  db.query(query, [novaSenha, id], (err, result) => {
    if (err) return res.status(500).json({ erro: err });
    if (result.affectedRows === 0) return res.status(404).json({ msg: 'Usuário não encontrado' });
    res.status(200).json({ msg: ' Senha atualizada com sucesso!' });
  });
});


router.delete('/conta/:id', (req, res) => {
  const { id } = req.params;

  const query = 'DELETE FROM usuario WHERE id = ?';
  db.query(query, [id], (err, result) => {
    if (err) return res.status(500).json({ erro: err });
    if (result.affectedRows === 0) return res.status(404).json({ msg: ' Usuário não encontrado' });
    res.status(200).json({ msg: 'Conta deletada com sucesso!' });
  });
});

module.exports = router;
