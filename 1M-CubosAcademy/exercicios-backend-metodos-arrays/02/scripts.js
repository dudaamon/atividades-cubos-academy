function divisaoDeGrupos(nomes, tamanhoDoGrupo) {
    let numeroGrupo = 1;
    for (let i = 0; i < nomes.length; i += tamanhoDoGrupo) {
        const grupo = `Grupo ${numeroGrupo}: ${nomes.slice(i, (i + tamanhoDoGrupo)).join(', ')}`;
        console.log(grupo);
        numeroGrupo++
    }
}
const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego'];
divisaoDeGrupos(nomes, 4);