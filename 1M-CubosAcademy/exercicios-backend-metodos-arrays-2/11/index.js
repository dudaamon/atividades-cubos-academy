const nomes = [
    "Maria",
    "João",
    "José",
    "Antonio",
    "Beatriz",
    "Camila",
    "amanda",
];

const filtroNome = (nomes) => {
    resultado = nomes.filter((nome) => {
        return nome[0] === "A" || nome[0] === "a"
    });
    console.log(resultado);
}
filtroNome(nomes);