const express = require('express')
const { cadastrarAutor, buscarAutor, cadastrarLivro, listarLivros } = require('./controladores/biblioteca')
const app = express()

app.post('/autor', cadastrarAutor)
app.get('/autor/:id', buscarAutor)
app.post('/autor/:id/livro', cadastrarLivro)
app.get('/livro', listarLivros)

app.use(express.json())

module.exports = app