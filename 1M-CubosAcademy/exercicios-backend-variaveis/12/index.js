const m = 90_000;
const c = 60_000;
const nM = 24;

const i = (m / c) ** (1 / nM) - 1;

const taxa = i * 100;

console.log(`O seu financiamento de ${c} reais teve uma taxa de juros de ${taxa.toFixed(2)}%, pois após ${nM} meses você teve que pagar ${m} reais.`)