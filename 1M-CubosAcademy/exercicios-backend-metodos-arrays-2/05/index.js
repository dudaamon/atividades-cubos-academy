const usuários = [
    {
        nome: "André",
        idade: 29,
        habilitado: false,
    },
    {
        nome: "Marcos",
        idade: 70,
        habilitado: true,
    },
    {
        nome: "Ana",
        idade: 35,
        habilitado: true,
    },
    {
        nome: "Vinícius",
        idade: 44,
        habilitado: true,
    },
    {
        nome: "Carlos",
        idade: 17,
        habilitado: false,
    },
    {
        nome: "Maria",
        idade: 19,
        habilitado: true,
    },
];

const usuariosFiltrados = usuários.filter(usuario => usuario.idade > 17 && usuario.idade < 66);

const todosHabilitados = usuariosFiltrados.every(usuario => usuario.habilitado);

if (todosHabilitados) {
    console.log("todos passaram no teste");
} else {
    console.log("todos precisam estar habilitados");
}
