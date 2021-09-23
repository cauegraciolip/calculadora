<<<<<<< HEAD
'use strict'

const display = document.querySelector('#contentDisplay')
const numeros = document.querySelectorAll('[id*=tecla]')
const reset = document.getElementById('reset')
const apagar = document.getElementById('delete')

// pegar o botao e colocar no display

const inserirNumero = (evento) => {
    display.textContent += evento.target.textContent
}

numeros.forEach(numero => 
    numero.addEventListener('click', inserirNumero)
)

// função reset = limpar numeros do display

const limparDisplay = () => display.textContent = ""

reset.addEventListener('click', limparDisplay)

// função delete = apagar ultimo numero inserido no display

const apagarNumero = () => {
    let str = document.getElementById('contentDisplay').textContent

    str = str.slice(0, -1)
}

apagar.addEventListener('click', apagarNumero)
=======
const display = document.getElementById('display')

const btn = document.querySelectorAll('input[class=btn_number]')

const operadores = document.querySelectorAll('input[class=btn_operators]')

const ponto = document.querySelector('input[class=btn_ponto]')

const apagar = document.getElementById('delete')

const reset = document.getElementById('reset')

const igual = document.getElementById('resultado')

let operador = true
let dot = true

const addOps = (index) => {

    let disp = display.textContent.substring(0, display.textContent.length -1)

    if (operador) {
        display.textContent += index.target.value
        operador = false
        dot = true
    } else {
        display.textContent = disp
        operador = true
        display.textContent += index.target.value
        operador = false
    }
}

const addNumber = (index) => {
    display.textContent += parseInt(index.target.value)
    operador = true
}

ponto.addEventListener('click', function addDot() {
    if (dot) {
        display.textContent += ponto.value
        dot = false
        operador = false
    }
})

apagar.addEventListener('click', function cleanLast() {
    let disp = display.textContent.substring(0, display.textContent.length -1)

    display.textContent = disp
    dot = true
})

reset.addEventListener('click', function resetDisplay() {
    location.reload()
})

igual.addEventListener('click', function resultado() {
    display.textContent = eval(display.textContent)
})

btn.forEach(element => {
    element.addEventListener('click', addNumber)})

operadores.forEach(element => {
    element.addEventListener('click', addOps)})
>>>>>>> temp
