const body = document.body
const slides = document.querySelectorAll('.slide')
const btnEsquerdo = document.getElementById('esquerda')
const btnDireito = document.getElementById('direita')

let slideAtivo = 0

btnDireito.addEventListener('click', () => {
    slideAtivo++

    if (slideAtivo > slides.length - 1) {
        slideAtivo = 0
    }
    setBgBody()
    setSlideAtivo()
})

btnEsquerdo.addEventListener('click', () => {
    slideAtivo--

    if (slideAtivo < 0) {
        setSlideAtivo = slides.length -1
    }
    setBgBody()
    setSlideAtivo()
})

setBgBody()



function setBgBody() {
    body.style.backgroundImage = slides[slideAtivo].style.backgroundImage

}

function setSlideAtivo() {
    slides.forEach(slide => {
        slide.classList.remove('active')
    })

    slides[slideAtivo].classList.add('active')
}