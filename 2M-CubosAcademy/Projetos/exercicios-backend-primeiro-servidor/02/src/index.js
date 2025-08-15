const express = require('express');
const app = express();

let segundos = 0;
let minutos = 0;
let contagem = false;

function cronometro() {
    contagem = true;
    setInterval(() => {
        if (contagem) {
            if (segundos >= 59) {
                segundos = 0;
                minutos++;
            } else {
                segundos++
            }
        }
    }, 1000);
};


app.get('/', (req, res) => {
    res.send(`Tempo atual do cronômetro: ${minutos} minutos e ${segundos} segundos`)
});

app.get('/iniciar', (req, res) => {
    cronometro();
    res.send(`Cronômetro iniciado!`)
});

app.get('/pausar', (req, res) => {
    contagem = false;
    res.send(`Cronômetro pausado!`)
});

app.get('/continuar', (req, res) => {
    contagem = true;
    res.send(`Cronômetro continuando!`)
});

app.get('/zerar', (req, res) => {
    minutos = 0;
    segundos = 0;
    res.send(`Cronômetro zerado!`)
});

app.listen(8000);