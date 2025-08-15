const numeroCartao = '1111222233334444';

const primeiros4Digitos = numeroCartao.slice(0, 4);
const ultimos4Digitos = numeroCartao.slice(-4);

const numFormatado = primeiros4Digitos + "*********" + ultimos4Digitos;
console.log(numFormatado);