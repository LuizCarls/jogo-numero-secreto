function verificarChuteValorValido(chute) {
    const numero = +chute

    if(chuteForInavlido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>'
        return
    }

    if(numeroForMaiorOuMenorQueValorPermitido(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido: Fale número entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if(numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Parabéns!</h2>
        <h3>Você acertou o número secreto: ${numeroSecreto}</h3>

        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
    } else if(numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `
    }
}

function chuteForInavlido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})