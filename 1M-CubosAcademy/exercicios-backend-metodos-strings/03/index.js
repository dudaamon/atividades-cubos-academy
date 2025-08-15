const texto = "Aprenda programar do zero na Cubos Academy";

function textoAmigavel(texto) {
    let novoTexto = texto.toLowerCase();
    novoTexto = novoTexto.replace(/ /g, "-");
    console.log(novoTexto);
}
textoAmigavel(texto);