// FAÇA UM PROGRAMA QUE CALCULE E MOSTRE EM GB O QUANTO DE MEMÓRIA TOTAL TEM.

const os = require('os')

console.log("Memória total: " + (os.totalmem() / (1024 * 1024 * 1024)).toFixed(2) + " GB")