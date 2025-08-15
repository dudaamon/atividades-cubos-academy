const express = require('express')
const { cadastroPokemon, atualizarApelido, listarPokemons, detalharPokemonID, excluirPokemon } = require('./controladores/pokemons')
const { cadastroUsuario, loginUsuario } = require('./controladores/usuarios')
const verificarAutenticacao = require('./intermediarios/autenticacao')
const rotas = express()

rotas.post('/usuario', cadastroUsuario)
rotas.post('/login', loginUsuario)

rotas.use(verificarAutenticacao)

rotas.post('/pokemon', cadastroPokemon)
rotas.patch('/pokemon/:id', atualizarApelido)
rotas.get('/pokemon', listarPokemons)
rotas.get('/pokemon/:id', detalharPokemonID)
rotas.delete('/pokemon/:id', excluirPokemon)

rotas.use(express.json())

module.exports = { rotas }