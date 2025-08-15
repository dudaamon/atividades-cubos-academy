function promocao(inicio, solicitacao) {
    return (solicitacao - inicio) / (24 * 60 * 60 * 1000) <= 30;
}
const inicio = new Date(2023, 7, 28);
const solicitacao = new Date(2023, 8, 20);

console.log(promocao(inicio, solicitacao));