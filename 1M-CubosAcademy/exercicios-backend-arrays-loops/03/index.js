const numeros = [54, 22, 14, 10, 284];

let encontrado = false;

for (let number of numeros) {
    if (number === 10) {
        console.log(3);
        encontrado = true;
        break;
    }
} if (!encontrado) {
    console.log(-1)
}