const imoveis = require('../bancodedados/bancodedados');

const listagem = (req, res) => {
    res.send(imoveis);
}

const filtragem = (req, res) => {
    const acharId = Number(req.params.id);
    const acharImovel = imoveis.find((imovel) => {
        return imovel.id === acharId;
    });

    if (acharImovel) {
        res.send(acharImovel);
    } else {
        res.send("Imóvel não encontrado.");
    }
}

module.exports = {
    listagem,
    filtragem
};