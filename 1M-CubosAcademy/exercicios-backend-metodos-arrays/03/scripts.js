function grupoDeCarros(carros, posicao) {
    const grupo = carros.slice(posicao, posicao + 3);
    console.log(grupo.join(' - '));

}
const carros = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3;
grupoDeCarros(carros, posicao);