const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};

function corrigirProva(prova) {
    const questoesCorretas = prova.questoes.length;
    let acertos = 0;
    for (questao of prova.questoes) {
        if (questao.resposta === questao.correta) {
            acertos++;
        }
    }
    const nota = (acertos / questoesCorretas) * prova.valor;
    console.log(`O aluno(a) ${prova.aluno} acertou ${acertos} questões e obteve nota ${nota}`);
}
corrigirProva(prova);