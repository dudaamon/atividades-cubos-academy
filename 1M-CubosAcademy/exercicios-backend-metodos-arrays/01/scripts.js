const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];
let resultado = frutas.reverse();
resultado = resultado.join(", ");
console.log(resultado);

const frutas2 = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];
frutas2.splice(0, 1);
frutas2.splice(frutas2.length - 1, 1);
frutas2.splice(frutas2.length, 0, "Melão");
console.log(frutas2);