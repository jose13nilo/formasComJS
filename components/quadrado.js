import linha from "./linhaDiagonal.js"
import ponto from "./ponto.js"

const quadrado = (ponto1, ponto2) => {

    let quadrado = document.createElement('quadrado')

    let x1 = ponto1.x
    let y1 = ponto1.y

    let x2 = ponto2.x
    let y2 = ponto2.y

    let pontoAuxiliar1 = ponto(x1, y2)
    let pontoAuxiliar2 = ponto(x2, y1)

    quadrado.appendChild(linha(ponto1, pontoAuxiliar1))
    quadrado.appendChild(linha(pontoAuxiliar1, ponto2))

    quadrado.appendChild(linha(ponto2, pontoAuxiliar2))
    quadrado.appendChild(linha(pontoAuxiliar2, ponto1))

    return quadrado
}

export default quadrado