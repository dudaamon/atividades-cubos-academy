const carro = {
    ligado: false,
    velocidade: 0,

    ligar: function () {
        if (carro.ligado) {
            console.log("Este carro já está ligado.");
        } else {
            carro.ligado = true;
            console.log(`Carro ligado.\nVelocidade: ${carro.velocidade}.`);
        }
    },

    desligar: function () {
        if (!carro.ligado) {
            console.log("Este carro já está desligado.");
        } else {
            carro.ligado = false;
            carro.velocidade = 0;
            console.log(`Carro desligado.\nVelocidade: ${carro.velocidade}`);
        }
    },

    acelerar: function () {
        if (!carro.ligado) {
            console.log("Não é possivel acelerar um carro desligado.");
        } else {
            carro.velocidade += 10;
            console.log(`Carro ligado.\nVelocidade: ${carro.velocidade}`);
        }
    },

    desacelerar: function () {
        if (!carro.ligado) {
            console.log("Não é possivel desacelerar um carro desligado.");
        } else {
            carro.velocidade -= 10;
            console.log(`Carro ligado.\nVelocidade: ${carro.velocidade}`);
        }
    }
};


carro.desligar();
console.log("---------------");
carro.ligar();
console.log("---------------");
carro.ligar();
console.log("---------------");
carro.acelerar();
console.log("---------------");
carro.acelerar();
console.log("---------------");
carro.desacelerar();
console.log("---------------");
carro.desligar();
console.log("---------------");
carro.acelerar();
console.log("---------------");
carro.desacelerar();
console.log("---------------");