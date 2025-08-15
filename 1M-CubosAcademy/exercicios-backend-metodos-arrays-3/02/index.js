const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
];

const maiorNome = cidades.reduce((acumulador, elementoAtual) => {
    let maior = acumulador;
    if (elementoAtual.length > maior.length) {
        maior = elementoAtual;
    }
    return maior;
});
console.log(maiorNome);