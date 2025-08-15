const nomes = ["Ana", "Joana", "Carlos", "amanda"];

const inicial = [];

for (let nome of nomes) {
    if (nome[0] === 'a' || nome[0] === 'A') {
        inicial.push(nome);
    }
} console.log(inicial);