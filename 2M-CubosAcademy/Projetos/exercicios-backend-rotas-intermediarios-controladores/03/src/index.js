const express = require('express');
const app = express();

const { filtragem, listagem } = require('./controladores/imoveis');

app.get('/imoveis', listagem);
app.get('/imoveis/:id', filtragem);

app.listen(8000);