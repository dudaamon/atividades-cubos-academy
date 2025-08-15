const palavras = ["livro", "caneta", "sol", "carro", "orelha"];

const verificar = palavras => {
    return palavras.some(palavras => palavras.length > 5);
}

if (verificar(palavras)) {
    console.log("existe palavra inválida");
} else {
    console.log("array validado");
}