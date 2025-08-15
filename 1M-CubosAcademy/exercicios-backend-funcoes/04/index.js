const contaBancaria = {
    nome: 'Maria',
    saldo: 0,
    historicos: []

};
function depositar(valor) {
    contaBancaria.saldo += valor;
    contaBancaria.historicos.push({
        tipo: 'Deposito',
        valor: valor
    });
    console.log(`Depósito de R$${(valor / 100).toFixed(2)} realizado pra o(a) cliente(a): ${contaBancaria.nome}`);
}

function sacar(valor) {
    if (contaBancaria.saldo < valor) {
        console.log(`Saldo insuficiente para o saque de ${contaBancaria.nome}`);
        return;
    }
    contaBancaria.saldo -= valor;
    contaBancaria.historicos.push({
        tipo: 'Saque',
        valor: valor
    });
    console.log(`Saque de R$${(valor / 100).toFixed(2)} realizado para cliente ${contaBancaria.nome}`);
}

function extrato() {
    console.log(`Extrato de ${contaBancaria.nome} - Saldo: R$${(contaBancaria.saldo / 100).toFixed(2)}`);
    console.log('Histótico')
    for (let historico of contaBancaria.historicos) {
        console.log(`${historico.tipo} de R$${(historico.valor / 100).toFixed(2)}`);
    }
}
depositar(10000);
sacar(50000);
sacar(5000);
extrato();