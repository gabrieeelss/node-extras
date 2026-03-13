const fs = require('fs')

let pasta = 'fotos'

// VERIFICANDO SE EXISTE A PASTA
console.log("\n\n===== verificando pasta =====")
if (fs.existsSync(pasta)) {
    console.log('Tudo certo!')
} else {
    console.log('A pasta não existe')
}

//CRIANDO PASTAS
console.log("\n\n===== criando pasta =====")
pasta = 'icones/redesSociais/ilustracoes'
if (!fs.existsSync(pasta)) {
    fs.mkdirSync(pasta)
    console.log("pasta criada")
} else {
    console.log("pasta já existe")
}

//LENDO ARQUIVOS
console.log("\n\n ===== Listando pastas =====")
pasta = 'icones'
console.log(fs.readdirSync(pasta))

// RENOMEANDO ARQUIVOS
console.log("\n\n===== Renomeando pastas =====")
try{
    fs.renameSync('icones', 'icons')
    console.log("pasta renomeada!")
} catch(erro){
    console.log("não foi renomeada")
}

// DELETANDO ARQUIVOS (npm i fs-extra)
console.log("\n\n ===== excluindo pasta =====")
const fsextra = require('fs-extra')

const folder = 'icons'
fsextra.remove(folder, erro => {
    console.error(erro)
})