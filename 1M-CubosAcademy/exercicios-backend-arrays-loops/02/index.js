const letras = ["A", "e", "B", "C", "E", "z"];

let x = 0;

for (let vogal of letras) {
    if (vogal === "e" || vogal === "E") {
        x++
    }
}
console.log(`Foram encontradas ${x} letras "E" ou "e".`)