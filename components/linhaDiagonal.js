import ponto from "./ponto.js"

const linhaDiagonal = (ponto1, ponto2, cor = 'black', destaque = 999, afastamento = 1) => {

    let linhaDiagonal = document.createElement('linhaDiagonal')
    let linhaDiagonalEstilo = linhaDiagonal.style

    linhaDiagonalEstilo.position = 'absolute'

    let x1 = ponto1.x
    let y1 = ponto1.y

    let x2 = ponto2.x
    let y2 = ponto2.y

    let xMenor = x1<=x2? x1 : x2
    let yMenor = y1<=y2? y1 : y2

    linhaDiagonalEstilo.left = xMenor+'px'
    linhaDiagonalEstilo.top = yMenor+'px'

    let comprimentoX = Math.abs(x1-x2)
    let comprimentoY = Math.abs(y1-y2)
    let comprimentoMaior = comprimentoX>comprimentoY?comprimentoX:comprimentoY

    linhaDiagonalEstilo.width = comprimentoX+'px'
    linhaDiagonalEstilo.height = comprimentoY+'px'

    linhaDiagonal.x = comprimentoX
    linhaDiagonal.y = comprimentoY

    let afastamentoX = afastamento*comprimentoX/comprimentoMaior
    let afastamentoY = afastamento*comprimentoY/comprimentoMaior

    let corecao = false
    let corecaoX = 0
    let encolhimento

    if(x1>x2&&y1<y2||x1<x2&&y1>y2){

        corecaoX = afastamentoX
        corecao = true
        encolhimento = 2

    }

    let x = 0
    let y = 0

    do{

        console.log(x, y)

        linhaDiagonal.appendChild(ponto(x+corecaoX, y, cor, destaque))

        if(x<=comprimentoX){
            x += afastamentoX
        }

        if(y<=comprimentoY){
            y += afastamentoY
        }

        if(corecao){
            corecaoX=comprimentoX-afastamentoX*encolhimento
            encolhimento += 2
        }

    }while(x<comprimentoX || y<comprimentoY)

    return linhaDiagonal

}

export default linhaDiagonal