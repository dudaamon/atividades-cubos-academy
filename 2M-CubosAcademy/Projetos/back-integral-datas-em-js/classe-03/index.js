function taAberto(date) {
    const hora = date.getHours();
    return hora >= 8 && hora <= 18;
}

console.log(taAberto(new Date(2015, 1, 1, 12)));
console.log(taAberto(new Date(2015, 1, 1, 2)));