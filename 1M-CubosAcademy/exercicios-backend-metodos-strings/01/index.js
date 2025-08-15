const comentario = "Esse COVID é muito perigoso!";

const comentarioMinusculo = comentario.toLowerCase();
const comentarioMaiusculo = comentario.toUpperCase();

if (comentarioMinusculo.includes("covid") || comentarioMaiusculo.includes("COVID")
    || comentarioMinusculo.includes("pandemia") || comentarioMaiusculo.includes("PANDEMIA")) {
    console.log(`Comentário bloqueado por conter palavras proibidas.`);
} else {
    console.log(`Comentário autorizado.`)
}