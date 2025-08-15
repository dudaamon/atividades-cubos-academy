const valorDoTenis = 129.99;
const meuDinheiro = 80;

const desconto = valorDoTenis - meuDinheiro;

const cupom = desconto * 100 / valorDoTenis;

let resultado = cupom.toFixed(1);

console.log(resultado);