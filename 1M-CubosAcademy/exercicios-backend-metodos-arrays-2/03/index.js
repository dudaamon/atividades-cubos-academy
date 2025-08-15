const palavras = ["arroz", "feijão", "carne", "cerveja", "macarrão"]

const possuiBebidaProibida = palavras.some(item => item === "cerveja" || item === "vodka");

if (possuiBebidaProibida) {
    console.log("revise sua lista, joão. possui bebida com venda proibida!");
} else {
    console.log("tudo certo, vamos às compras!");
}