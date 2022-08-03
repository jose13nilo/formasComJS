const ponto = (x, y, cor = 'black', destaque = 1000) => {

    let ponto = document.createElement('ponto')
    let pontoEstilo = ponto.style

    pontoEstilo.position = 'absolute'
    pontoEstilo.backgroundColor = cor
    pontoEstilo.zIndex = destaque

    pontoEstilo.height = '1px'
    pontoEstilo.width = '1px'

    pontoEstilo.left = x+'px'
    pontoEstilo.top = y+'px'

    ponto.x = x
    ponto.y = y

    return ponto

}

export default ponto