const tela = () => {

    let tela = document.body
    let telaEstilo = tela.style

    telaEstilo.height =  '100%'
    telaEstilo.width = '100%'
    telaEstilo.position = 'absolute'

    return tela
}

export default tela()