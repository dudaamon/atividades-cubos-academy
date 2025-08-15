const express = require('express');
const { vezDeJogar, removerJogador, adicionarJogador } = require('./controladores/jogadores');
const app = express();

app.get('/', vezDeJogar);
app.get('/remover', removerJogador);
app.get('/adicionar', adicionarJogador);

app.listen(8000);