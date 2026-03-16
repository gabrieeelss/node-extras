const fs = require('fs')

let novoCliente = 'Juca Bala \n'
try {
    const dados = fs.writeFileSync('clientes.txt', novoCliente)
    console.log("Novo cliente!")
} catch (erro) {
    console.error("Erro aqui:::::: " + erro)
}
novoCliente = 'Zé Rico'
try {
    const dados = fs.appendFileSync('clientes.txt', novoCliente)
    console.log("+1 Cliente!")
} catch (erro) {
    console.error("erro::::::::: " + erro)
}
const dados = fs.readFileSync('clientes.txt', 'utf-8')
console.log(dados)
console.log("Bem vindo")