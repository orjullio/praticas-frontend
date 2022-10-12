const coposPequenos = document.querySelectorAll('.copo-pequeno')
const litros = document.getElementById('litros')
const porcentagem = document.getElementById('porcentagem')
const conteudo = document.getElementById('conteudo')


coposPequenos.forEach((copo, idx) => {
    copo.addEventListener('click', () =>coposCheios(idx))
});

function coposCheios(idx) {
    if (coposPequenos[idx].classList.contains('cheio') && !coposPequenos[idx].nextElementSibling.classList.contains('cheio')) {
        idx--
    }
    
    
    coposPequenos.forEach((copo, xuxu) => {
        if (xuxu <= idx) {
            copo.classList.add('cheio')
        } else {
            copo.classList.remove('cheio')
        }
    })

    atualizarCopao()
}

function atualizarCopao() {
    const coposCheios = document.querySelectorAll('.copo-pequeno.cheio').length

    const totalCopos = coposPequenos.length

    if (coposCheios === 0) {
        porcentagem.style.visibility = 'hidden'
        porcentagem.style.height = 0
    } else {
        porcentagem.style.visibility = 'visible'
        porcentagem.style.height = `${coposCheios / totalCopos * 330}px`
        porcentagem.innerText = `${coposCheios / totalCopos * 100}%`
    }

    if (coposCheios === totalCopos) {
        conteudo.style.visibility = 'hidden'
        conteudo.style.height = 0
    } else {
        conteudo.style.visibility = 'visible'
        litros.innerText = `${2 - (250 * coposCheios / 1000)}L`
    }
 }