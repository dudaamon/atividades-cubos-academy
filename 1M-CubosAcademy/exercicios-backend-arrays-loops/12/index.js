const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];

while (filaDeDentro.length < 5) {
    const primeiraPFora = filaDeFora.shift();
    if (primeiraPFora === undefined) break;
    filaDeDentro.push(primeiraPFora);
}
console.log(filaDeDentro);
console.log(filaDeFora);