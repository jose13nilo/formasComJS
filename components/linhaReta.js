import ponto from "./ponto.js"

const linhaReta = (x, y, cor = 'black', destaque = 999, afastamento = 1) => {

    let linhaReta = document.createElement('linhaReta')
    let linhaRetaEstilo = linhaReta.style

    let pontoMaior = ponto1>ponto2?ponto1:ponto2

    let pontoMenor = 0

    do{

        linhaReta.appendChild(ponto(x, y, cor, destaque))

        if(x<=comprimento){
            x += afastamento
        }

    }while(pontoMenor<pontoMaior)

    return linhaReta

}

export default linhaReta