const cpf = "011.022.033-44";
const cnpj = "011.022.033/0001-44";

function verificarCPF(cpf) {
    return cpf.replace(/[/\.-]/g, "");
}

function verificarCNPJ(cnpj) {
    return cnpj.replace(/[/\.-]/g, "");
}

console.log(verificarCPF(cpf));
console.log(verificarCNPJ(cnpj));