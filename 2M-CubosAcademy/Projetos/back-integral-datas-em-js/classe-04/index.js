function taAberto(date) {
    const hora = date.getHours();
    const dia = date.getDay();

    const aberto = dia >= 1 && dia <= 5 && hora >= 8 && hora <= 18;
    return aberto;
}

console.log(taAberto(new Date(2021, 3, 25, 12)));
console.log(taAberto(new Date(2021, 3, 26, 12)));
console.log(taAberto(new Date(2021, 3, 26, 7, 59)));
