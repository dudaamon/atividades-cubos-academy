const celular = 7199918888;

numFormatado = celular.toString();

if (numFormatado.length === 8) {
    let inicioCelular = numFormatado.slice(0, 4);
    let fimCelular = numFormatado.slice(4, 9);
    console.log("9 " + inicioCelular + "-" + fimCelular);
}

if (numFormatado.length === 10) {
    let DDD = numFormatado.slice(0, 2);
    let inicioCelular = numFormatado.slice(2, 6);
    let fimCelular = numFormatado.slice(6, 10);
    console.log('(' + DDD + ')' + " " + "9 " + inicioCelular + "-" + fimCelular);
}