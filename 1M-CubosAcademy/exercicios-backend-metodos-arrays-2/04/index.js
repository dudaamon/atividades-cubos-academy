const numeros = [0, 122, 4, 6, 7, 8, 44];

const saoPares = numeros.every(numero => numero % 2 === 0);

if (saoPares) {
    console.log("array válido");
} else {
    console.log("array inválido");
}