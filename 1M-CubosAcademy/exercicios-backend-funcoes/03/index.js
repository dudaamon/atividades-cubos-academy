const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000,
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000,
        }
    ],
    imprimirResumo: function () {
        let totalDeProdutos = 0;
        let totalCompra = 0;
        for (let produto of carrinho.produtos) {
            totalDeProdutos += produto.qtd;
            totalCompra += produto.qtd * produto.precoUnit
        }

        console.log(`Cliente: ${carrinho.nomeDoCliente}.
        Total de itens: ${totalDeProdutos}.
        Total a pagar R$ ${totalCompra / 100},00`);
    },
    addProduto: function (produto) {
        let produtoExistente = false;
        for (let adicionado of carrinho.produtos) {
            if (adicionado.id === produto.id) {
                adicionado.qtd += produto.qtd;
                produtoExistente = true;
                break;
            }
        }
        if (!produtoExistente) {
            carrinho.produtos.push(produto);
        }
    },
    imprimirDetalhes: function () {
        console.log(`Cliente: ${carrinho.nomeDoCliente}.`);
        let item = 1;
        for (let produto of carrinho.produtos) {
            const totalItem = produto.qtd * produto.precoUnit;

            console.log(`Item ${item} - ${produto.nome} - Quantidade: ${produto.qtd} - Total: R$ ${totalItem / 100},00`);
            item++;
        }
    }
};
const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
};

const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
};

carrinho.addProduto(novaBermuda);
carrinho.addProduto(novoTenis);
carrinho.imprimirDetalhes();