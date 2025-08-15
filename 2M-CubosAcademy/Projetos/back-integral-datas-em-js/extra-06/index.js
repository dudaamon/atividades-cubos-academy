const promocao = (inicio, agora) => {
    const diferenca = (agora - inicio) / (1000 * 60 * 60);
    return diferenca <= 24
}
const iniciodapromo = new Date(2023, 8, 28, 0);
const agora = new Date();

console.log(promocao(iniciodapromo, agora));