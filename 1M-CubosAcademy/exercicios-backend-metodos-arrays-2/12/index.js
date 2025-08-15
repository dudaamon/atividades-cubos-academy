const pessoas = [
    {
        nome: "Antonio",
        idade: 30,
        profissao: "Jornalista",
    },
    {

        nome: "Maria",
        idade: 30,
        profissao: "Jornalista",
    },
    {
        nome: "Ana",
        idade: 21,
        profissao: "Programador",
    },
    {
        nome: "Beatriz",
        idade: 20,
        profissao: "Programador",
    },
    {
        nome: "José",
        idade: 32,
        profissao: "Jornalista",
    },
    {
        nome: "Marcos",
        idade: 30,
        profissao: "Programador",
    },
];

const filtrarProgramador20 = (pessoas) => {
    const resultado = pessoas.filter((pessoa) => {
        return pessoa.idade > 20 && pessoa.profissao === "Programador"
    })
    console.log(resultado);
}

const filtrarJornalistas30 = (pessoas) => {
    const resultado = pessoas.filter((pessoa) => {
        return pessoa.idade > 30 && pessoa.profissao === "Jornalista"
    })
    console.log(resultado);
}

const filtrarJeP = (pessoas) => {
    const resultado = pessoas.filter((pessoa) => {
        return pessoa.idade <= 29
    })
    console.log(resultado);
}

filtrarProgramador20(pessoas);
filtrarJornalistas30(pessoas);
filtrarJeP(pessoas);