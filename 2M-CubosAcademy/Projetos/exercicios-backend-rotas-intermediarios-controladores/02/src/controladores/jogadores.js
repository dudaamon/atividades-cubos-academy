const jogadores = require('../bancodedados');
let i = 0

const vezDeJogar = (req, res) => {
    res.send(`É a vez de ${jogadores[i]} jogar`);
    i++
    if (i >= jogadores.length) {
        i = 0
    }
}

const removerJogador = (req, res) => {
    const { indice } = req.query

    if (!jogadores[indice]) {
        return res.send(`Não existe jogador no índice informado(${indice}) para ser removido.`);
    }
    jogadores.splice(indice, 1)

    return res.send(jogadores)
}

const adicionarJogador = (req, res) => {
    const { nome, indice } = req.query
    if (!indice) {
        jogadores.push(nome)
        return res.send(jogadores)
    }
    if (!jogadores[indice]) {
        return res.send(`O índice informado(${indice}) não existe no array. Novo jogador não foi adicionado.`);
    }

    jogadores.splice(indice, 0, nome)
    return res.send(jogadores)
}

module.exports = {
    vezDeJogar,
    removerJogador,
    adicionarJogador
};