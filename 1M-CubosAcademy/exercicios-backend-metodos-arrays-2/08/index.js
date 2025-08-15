const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"]

const novasFrutas = frutas.map((fruta, i) => {
    let novaFruta = `${i} - ` + fruta[0].toUpperCase() + fruta.slice(1).toLowerCase();
    return novaFruta;
});

console.log(novasFrutas);