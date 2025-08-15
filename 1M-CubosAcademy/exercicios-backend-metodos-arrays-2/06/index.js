const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
]

const cidadesDe8c = cidades.filter(cidade => cidade.length <= 8);

const resultadoFormatado = cidadesDe8c.join(', ');

console.log(resultadoFormatado);