const somar = (req, res) => {
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);
    const resultado = num1 + num2;
    res.send(`O resultado da soma de ${num1} e ${num2} é ${resultado}`);
}

const subtrair = (req, res) => {
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);
    const resultado = num1 - num2;
    res.send(`O resultado da subtração de ${num1} e ${num2} é ${resultado}`);
};

const multiplicar = (req, res) => {
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);
    const resultado = num1 * num2;
    res.send(`O resultado da multiplicação de ${num1} e ${num2} é ${resultado}`);
};

const dividir = (req, res) => {
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);
    const resultado = num1 / num2;
    res.send(`O resultado da divisão de ${num1} e ${num2} é ${resultado}`);
};

module.exports = {
    somar,
    subtrair,
    dividir,
    multiplicar
}