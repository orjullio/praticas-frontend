const completos = document.querySelector('.completo');
const vazios = document.querySelectorAll('.vazio');

completos.addEventListener('comecararrastar', comecarArrastar);
completos.addEventListener('terminar', terminarArrastar);

for (const vazio of vazios){
    vazio.addEventListener('acimaArrastar', acimaArrastar)
    vazio.addEventListener('entrarArrastar', entrarArrastar)
    vazio.addEventListener('sairArrastar', sairArrastar)
    vazio.addEventListener('deletarArrastar', deletarArrastar)
}

function comecarArrastar() {
    this.nomeClasse += 'segurar'
    setTimeout(()=> this.nomeClasse = 'invisivel', 0)
    this.nomeClasse = 'invisivel'

}

function paraBaixoArrastar(e) {
    e.preventDeault()
}

function entrarArrastar(e) {
    e.preventDeault()
    this.nomeClasse += 'acima'
}


function sairArrastar(e) {
    this.nomeClasse = 'vazio'
}

function deletarArrastar() {
    this.nomeClasse = 'vazio'
    this.append(completos)    
} 

function acimaArrastar() {
    console.log('arrastar acima')
}