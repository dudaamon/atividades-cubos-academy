const primeiroNome = "Mario";
const sobrenome = " Bros";
const apelido = "";

if (apelido) {
    console.log(apelido);
} else if (!primeiroNome) {
    console.log("Por favor, preencha o seu primeiro nome!");
} else if (sobrenome) {
    console.log(primeiroNome + sobrenome);
} else if (primeiroNome) {
    console.log(primeiroNome + sobrenome);
}