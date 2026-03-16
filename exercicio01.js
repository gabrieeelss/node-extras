// FAÇA UM PROGRAMA QUE CALCULE E MOSTRE EM GB O QUANTO DE MEMÓRIA LIVRE TEM.

const os = require('os')

console.log("Memória livre: " + (os.freemem() / (1024 * 1024 * 1024)).toFixed(2) + " GB")