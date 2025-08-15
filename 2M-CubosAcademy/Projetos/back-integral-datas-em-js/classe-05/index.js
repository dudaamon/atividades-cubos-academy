function taAberto(date) {
    const hora = date.getHours();
    const dia = date.getDay();

    const diasUteis = dia >= 1 && dia <= 5;
    const sabado = dia === 6;
    const lojaAberta = diasUteis && hora >= 8 && hora <= 18 || sabado && hora >= 8 && hora < 12;
    return (lojaAberta)
}

console.log(taAberto(new Date(2021, 3, 25, 12)));
console.log(taAberto(new Date(2021, 3, 26, 12)));
console.log(taAberto(new Date(2021, 3, 26, 7, 59)));
console.log(taAberto(new Date(2021, 3, 24, 9, 30)));