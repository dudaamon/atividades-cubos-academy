const carros = [
    {
        marca: "Honda",
        modelo: "Civic",
        ano: 2020,
        cor: "Cinza",
        quantidade_portas: 4,
        automatico: true
    },
    {
        marca: "Hyundai",
        modelo: "HB20",
        ano: 2019,
        cor: "Cinza",
        quantidade_portas: 4,
        automatico: true
    },
    {
        marca: "Chevrolet",
        modelo: "Onix",
        ano: 2014,
        cor: "Preto",
        quantidade_portas: 4,
        automatico: true
    },
];

for (let i = 0; i < carros.length; i++) {
    const carro = carros[i];

    console.log(`Marca: ${carro.marca}`);
    console.log(`Modelo: ${carro.modelo}`);
    console.log(`Ano: ${carro.ano}`);
    console.log(`Cor: ${carro.cor}`);
    console.log(`Quantidade de Portas: ${carro.quantidade_portas}`);

    if (carro.automatico) {
        console.log("Automático: Sim");
    } else {
        console.log("Automático: Não");
    }

    console.log("--------------------------");
}