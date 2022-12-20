const contadores = document.querySelectorAll('.contador')

contadores.forEach(contador => {
    contador.innerText = '0'

    const atualizaContador = () => {
        const target = contador.getAttribute('data-target')
        const c = +contador.innerText

        const incrementar = target / 2000
        console.log(incrementar)

        if (c < target) {
            contador.innerText = `${Math.ceil(c + incrementar)}`
            setTimeout(atualizaContador, 1)
        } else {
            contador.innerText = target
        }

    }

    atualizaContador()
})