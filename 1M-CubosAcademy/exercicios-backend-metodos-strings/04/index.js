let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";

identificador = identificador.padStart(6, "000");

const novoNome = nome.split(" ")
let nomeFormatado = "";

for (const item of nome.split(" ")) {
    nomeFormatado +=
        item[0].toUpperCase() + item.slice(1).toLowerCase() + " ";
}
email = email.trim();
console.log(identificador);
console.log(nomeFormatado);
console.log(email);