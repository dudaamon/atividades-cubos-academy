const express = require('express')
const { detalharEmpresa } = require('./controladoress/empresas')
const rotas = express()

rotas.get('/empresas', detalharEmpresa)

module.exports = rotas