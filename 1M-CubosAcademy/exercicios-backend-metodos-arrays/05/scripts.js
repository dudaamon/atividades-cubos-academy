const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

function agendarPaciente(lista, nome) {
    lista.push(nome);
    console.log(lista.join(', '));
}

function atenderPaciente(lista) {
    lista.shift();
    console.log(lista.join(', '));
}

function cancelarAtendimento(lista, nome) {
    let itemNome = lista.indexOf(nome);
    lista.splice(itemNome, 1);
    console.log(lista.join(', '));
}

agendarPaciente(pacientes, "Eduarda");
console.log("-------------------------------------------------------");
atenderPaciente(pacientes);
console.log("-------------------------------------------------------");
cancelarAtendimento(pacientes, "João");