const display = document.getElementById('display')
const botoes = (document.querySelectorAll('[id*=tecla]'))
const operadores = document.querySelectorAll('[id*=operador]')

operadores.forEach(operador => {
    operador.addEventListener('click', function selecionarOperador(evento) {
        display.innerHTML += evento.target.textContent
    })
})

botoes.forEach(botao => {
    botao.addEventListener('click', function inserirNumero(evento) {
        display.innerHTML += evento.target.textContent
    })
})

