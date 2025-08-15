const express = require('express');
const app = express();
const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
let ind = 0;

app.get('/', (req, res) => {
    const jogador = jogadores[ind];
    ind++;

    if (ind >= jogadores.length) {
        ind = 0;
    }

    return res.send(`É a vez de ${jogador} jogar!`);
});

app.listen(3000);