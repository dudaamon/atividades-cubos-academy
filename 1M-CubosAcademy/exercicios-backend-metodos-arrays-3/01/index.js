const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2]

const ordenarPorOrdemCrescente = numeros.sort((a, b) => a - b);
console.log(ordenarPorOrdemCrescente);

const ordenarPorOrdemDecrescente = numeros.sort((a, b) => b - a);
console.log(ordenarPorOrdemDecrescente);

const ordenarPadraoUnicode = numeros.sort()
console.log(ordenarPadraoUnicode);


const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"]

const frutasOrdenadas = frutas.sort((a, b) => {
    return a.localeCompare(b)
});
console.log(frutasOrdenadas);

const frutasOrdDecrescente = frutas.sort((a, b) => {
    return b.localeCompare(a);
});
console.log(frutasOrdDecrescente);

const frutasQtdCaracteres = frutas.sort((a, b) => {
    return a.length - b.length;
});
console.log(frutasQtdCaracteres);