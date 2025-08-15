const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

function atendimento(lista, operacao, nome) {
    if (operacao === "agendar") {
        lista.push(nome);
    } else if (operacao === "atender") {
        lista.shift();
    }
    console.log(lista.join(', '));
}

atendimento(pacientes, "agendar", "Eduarda");
atendimento(pacientes, "atender");