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