//variáveis----------------

var display = document.getElementById("display")

var botaostart = document.getElementById("btm-start")
var botaostop = document.getElementById("btm-stop")
var botaoreset = document.getElementById("btm-reset")


var milisegundos = 0;
var segundos = 0;
var minutos = 0;

var intervalo = "";


//set's--------------------

botaostart.addEventListener('click', ()=>{start()})
botaostop.addEventListener('click', ()=>{stop()})
botaoreset.addEventListener('click', ()=>{reset()})

//funções------------------


function render(m, s, ms) {


    if (m > 0) {
        display.innerHTML = `${('0' + m).slice(-2)}:${('0' + s).slice(-2)}:${('0' + ms).slice(-2)}`

    }

    else {
        display.innerHTML = `${('0' + s).slice(-2)}:${('0' + ms).slice(-2)}`

    }

}



function setvar() {

    milisegundos += 1;

    if (milisegundos == 100) {
        milisegundos = 0;
        segundos += 1;

    }

    if (segundos == 60) {
        segundos = 0;
        minutos += 1;

    }


    render(minutos, segundos, milisegundos)


}

function start() {

    intervalo = setInterval(setvar, 10);
}

function stop() {

    clearInterval(intervalo)

}

function reset() {

    milisegundos = 0;
    segundos = 0;
    minutos = 0;
    stop()
    render(minutos, segundos, milisegundos)
}




