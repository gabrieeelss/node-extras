// setTimeout(function(){
//     console.log("agendamento")
// }, 100)

// setInterval(function(){
//     console.log("agendamento")
// }, 100)

// function mensagem(){
//     console.log("Agendado")
// }

// setInterval( function(){
//     mensagem()
// }, 1000)

let contador = 0
function mensagem(){
    contador++
    console.log(contador)
    console.log("agendado")
    if(contador == 5){
        clearInterval(intervalo)
    }
}

const intervalo = setInterval( function(){
    mensagem()
}, 1000)