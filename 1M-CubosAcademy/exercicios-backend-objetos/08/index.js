const usuarios = [
    {
        nome: "João",
        pets: [],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]

for (let usuario of usuarios) {
    if (usuario.pets.length > 0) {
        if (usuario.pets.length > 1) {
            console.log(`Eu sou ${usuario.nome} e tenho ${usuario.pets.length} pets.`);
        } else {
            console.log(`Eu sou ${usuario.nome} e tenho ${usuario.pets.length} pet.`);
        }
    } else {
        console.log(`Eu sou ${usuario.nome} e não tenho pets.`)
    }
}