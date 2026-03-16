// FAÇA UM PROGRAMA QUE CALCULE E MOSTRE EM MINUTOS E EM HORAS QUENTO TEMPO O COMPUTADOR ESTÁ LIGADO

const os = require('os')

console.log("O computador está ligado há " + (os.uptime() / 3600).toFixed(2) + " horas e " + (os.uptime() / 60).toFixed(2) + "minutos")