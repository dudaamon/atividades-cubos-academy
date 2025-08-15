const c = 1000;
const i = 0.125;
const t = 5;

let m = c * (1 + i) ** t;

m = Math.round(m);

console.log(m)