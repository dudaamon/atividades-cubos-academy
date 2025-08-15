const endereços = [
    { cep: 00111222, rua: "Rua dos Artistas" },
    { cep: 00111333, rua: "Rua Augusta" },
    { cep: 00222444, rua: "Avenida Paralela" },
    { cep: 11222333, rua: "Rua Carlos Gomes" },
];

function buscarEnderecoPorCEP(cep) {
    const enderecoEncontrado = endereços.find(endereco => endereco.cep === cep);

    if (enderecoEncontrado) {
        console.log(enderecoEncontrado.rua);
    } else {
        console.log("CEP não encontrado");
    }
}

buscarEnderecoPorCEP(00222444);