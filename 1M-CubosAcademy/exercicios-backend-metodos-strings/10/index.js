function validacaoDeArquivos(nomeArquivo) {
    const arquivo = nomeArquivo.indexOf('.');
    const validacao = nomeArquivo.slice(arquivo + 1)

    if (validacao === 'jpg' || validacao === 'jpeg' || validacao === 'gif' || validacao === 'png') {
        return "Arquivo Válido.";
    } else {
        return "Arquivo Inválido.";
    }
}

const nomeArquivo = 'Foto da Familia.png';

console.log(validacaoDeArquivos(nomeArquivo));