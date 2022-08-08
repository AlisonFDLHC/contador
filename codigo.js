const contador = document.getElementById("contador");
const botoes = document.querySelectorAll(".button");

let contagem = 0

botoes.forEach((botao) => {
    botao.addEventListener('click', () => contadorFunc(botao.id))
})

function contadorFunc(acao) {
    switch(acao) {
        case 'menos':
            contagem -= 1
        break;
        case 'reset':
            contagem = 0
        break;
        case 'mais':
            contagem += 1
        break;
    }
    contador.innerHTML = contagem
    contador.classList.remove('positivo')
    contador.classList.remove('negativo')
    if (contagem < 0) {
        contador.classList.add('negativo')
    } else if (contagem > 0) {
        contador.classList.add('positivo')
    }
}