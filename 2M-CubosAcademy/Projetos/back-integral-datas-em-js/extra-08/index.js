const { format } = require('date-fns');
const { ptBR } = require('date-fns/locale');

function formatarData(data, formato) {
    return format(data, formato, { locale: ptBR });
}

const date = new Date(2020, 9, 5);
console.log(`a) ${formatarData(date, "dd 'de' MMMM 'de' yyyy")}`);
console.log(`b) ${formatarData(date, "dd/MM/yyyy")}`);
console.log(`c) ${formatarData(date, "d MMM")}`);
console.log(`d) ${formatarData(date, "dd MMM yyyy")}`);
console.log(`e) ${formatarData(date, "dd 'de' MMM 'de' yyyy")}`);
console.log(`f) ${formatarData(date, "dd/MMM")}`);