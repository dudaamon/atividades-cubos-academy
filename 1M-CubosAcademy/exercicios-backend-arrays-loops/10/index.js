const numeros = [8, 11, 4, 1];

let maiorDif = 0;
let menorDif = numeros[0];

for (let numero of numeros) {
    if (numero > maiorDif) {
        maiorDif = numero;
    }
    if (numero < menorDif) {
        menorDif = numero;
    }
}
let diferenca = maiorDif - menorDif;
console.log(diferenca);