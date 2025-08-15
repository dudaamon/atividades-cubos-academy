const tipoDePagamento = "credito";
const valorDoProduto = 13000;

if (tipoDePagamento === "credito") {
    const valorFinal = (valorDoProduto - (valorDoProduto * 0.05)) / 100;
    console.log(`Valor a ser pago: RS ${valorFinal.toFixed(2)}`);

} else if (tipoDePagamento === "cheque") {
    const valorFinal = (valorDoProduto - (valorDoProduto * 0.03)) / 100;
    console.log(`Valor a ser pago: RS ${valorFinal.toFixed(2)}`);

} else if (tipoDePagamento === "debito" || tipoDePagamento === "dinheiro") {
    const valorFinal = (valorDoProduto - (valorDoProduto * 0.1)) / 100;
    console.log(`Valor a ser pago: RS ${valorFinal.toFixed(2)}`);
}
