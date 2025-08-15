const email = "jose@cubos.academy";

function validacaoEmail(email) {
    const emailValido = email.includes("@") && email.includes(".");

    if (emailValido && email.slice(0, 1) !== "." && email.slice(-1) !== ".") {
        console.log(`O email "${email}" é válido.`);
    } else {
        console.log(`O email "${email}" é inválido.`);
    }
}
validacaoEmail(email);