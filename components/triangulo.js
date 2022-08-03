import linha from "./linhaDiagonal.js"

const triangulo = (ponto1, ponto2, ponto3) => {

    let triangulo = document.createElement('triangulo')

    triangulo.appendChild(linha(ponto1, ponto2))
    triangulo.appendChild(linha(ponto2, ponto3))
    triangulo.appendChild(linha(ponto3, ponto1))

    return triangulo
}

export default triangulo