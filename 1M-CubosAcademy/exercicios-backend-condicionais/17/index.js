const valorDoProduto = 100000;
const parcelas = 10;
const valorPago = 300;

const produtosEmReais = valorDoProduto / 100;
const valorParcelas = (valorDoProduto / parcelas) / 100;
const pagas = valorPago / valorParcelas;
const falta = parcelas - pagas;

console.log(`Restam ${falta} parcelas de R$ ${valorParcelas.toFixed()}`);