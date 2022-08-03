import linhaDiagonal from "./linhaDiagonal.js"
import linhaReta from "./linhaReta.js"
import ponto from "./ponto.js"

const linha = (ponto1, ponto2, cor = 'black', destaque = 999, afastamento = 1) => {

    let linha = document.createElement('linha')
    let linhaEstilo = linha.style

    linhaEstilo.position = 'absolute'

    let x1 = ponto1.x
    let y1 = ponto1.y

    let x2 = ponto2.x
    let y2 = ponto2.y

    let xMenor = x1<=x2? x1 : x2
    let yMenor = y1<=y2? y1 : y2

    linhaEstilo.left = xMenor+'px'
    linhaEstilo.top = yMenor+'px'

    let comprimentoX = Math.abs(x1-x2)
    let comprimentoY = Math.abs(y1-y2)
    let comprimentoMaior = comprimentoX>comprimentoY?comprimentoX:comprimentoY

    linhaEstilo.width = comprimentoX+'px'
    linhaEstilo.height = comprimentoY+'px'

    linha.x = comprimentoX
    linha.y = comprimentoY

    x1==x2&&y1!=y2||x1!=x2&&y1==y2? linhaReta(linha) : linhaDiagonal(linha)

    return linha

}

export default linha