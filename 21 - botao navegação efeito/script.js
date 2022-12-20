const btns = document.querySelectorAll('.botao')


btns.forEach(botao => {
    botao.addEventListener('click', function(e) {
        const x = e.clientX
        const y = e.clientY

        const botaoTop = e.target.offsetTop
        const botaoEsquerda = e.target.offsetLeft

        const espacoX = x - botaoEsquerda
        const espacoY = y - botaoTop

        const circulo = document.createElement('span')
        circulo.classList.add('circulo')
        circulo.style.top = espacoY + 'px'
        circulo.style.left = espacoX + 'px'

        this.appendChild(circulo)

        setTimeout(() => circulo.remove(), 500)

    })
})