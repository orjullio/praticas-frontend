const elementoHora = document.querySelector('.hora')
const elementoMinuto = document.querySelector('.minuto')
const elementoSegundo = document.querySelector('.segundo')
const elementoTempo = document.querySelector('.tempo')
const elementoDia = document.querySelector('.dia')
const elementoToggle = document.querySelector('.toggle')

const dias = ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado", "Domingo"];

const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

elementoToggle.addEventListener('click', (e) => {
    const html = document.querySelector('html')
    if (html.classList.contains('escuro')){
        html.classList.remove('escuro')
        e.target.innerHTML = 'Escuro'
    } else {
        html.classList.add('escuro')
        e.target.innerHTML = 'Tema Claro'
    }
})

function setTempo() {
    const tempo = new Date();
    const mes = tempo.getMonth();
    const dia = tempo.getDay();
    const hora = tempo.getHours();
    const horasParaRelogio = hora % 12;
    const minutos = tempo.getMinutes();
    const segundos = tempo.getSeconds();
    const ampm = hora >= 12 ? 'PM' : 'AM'

    elementoHora.style.transform = `translate(-50%, -100%) rotate(${sacale(horasParaRelogio, 0, 11, 0, 360)}deg)`;
    elementoMinuto.style.transform = `translate(-50%, -100%) rotate(${sacale(minutos, 0, 59, 0, 360)}deg)`;
    elementoSegundo.style.transform = `translate(-50%, -100%) rotate(${sacale(segundos, 0, 59, 0, 360)}deg)`;

    elementoTempo.innerHTML = `${horasParaRelogio}:${minutos < 10 ? `0${minutos}` : minutos} ${ampm}`
    elementoDia = `${dias[dia]}, ${meses[mes]} <span class="circulo">${dia}</span>`
}

const sacale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

setTempo()

setInterval(setTempo, 1000)

