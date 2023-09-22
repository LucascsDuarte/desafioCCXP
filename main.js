// Timer 

const meses = document.getElementById("meses");
const dias = document.getElementById("dias");
const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

const ccxp = "1 Dec 2024";

function countDown() {
    const ccxpDate = new Date(ccxp);
    const hoje = new Date();

    const diffMilliseconds = ccxpDate - hoje;


    const mesesRestantes = Math.floor(diffMilliseconds / (1000 * 60 * 60 * 24 * 30.44)); 
    const diasRestantes = Math.floor((diffMilliseconds % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
    const horasRestantes = Math.floor((diffMilliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutosRestantes = Math.floor((diffMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
    const segundosRestantes = Math.floor((diffMilliseconds % (1000 * 60)) / 1000);

    meses.innerHTML = formatoTempo(mesesRestantes);
    dias.innerHTML = formatoTempo(diasRestantes);
    horas.innerHTML = formatoTempo(horasRestantes);
    minutos.innerHTML = formatoTempo(minutosRestantes);
    segundos.innerHTML = formatoTempo(segundosRestantes);
}

function formatoTempo( tempo ){
    return tempo < 10? `0${tempo}` : tempo;
}

countDown();
setInterval(countDown, 1000);

// Cards do ingresso

function highlightCard(selector){
    const element = document.querySelector(selector);
    element.classList.toggle("card-highlight");
}

function checkKeyboardCode(){
    document.addEventListener('keydown', (event) => {
        const name = event.key;
        const code = event.code;
        alert(`Tecla Pressionada ${name} \r\n Key code: ${code}`);
    }, false);
}

function addKeyboardEventListeners(){
    document.addEventListener('keydown',(event) => {

    }, false);
}