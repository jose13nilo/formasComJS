import linha from "../components/linhaDiagonal.js"
import ponto from "../components/ponto.js"
import quadrado from "../components/quadrado.js"
import tela from "../components/tela.js"
import triangulo from "../components/triangulo.js"

let pontoVermelho = ponto(51,50, 'red')
let pontoAzul = ponto(50,20, 'blue')

let pontoVerde = ponto(50,50, 'green')
let pontoRoxo = ponto(10,20, 'purple')

//tela.appendChild(linha(ponto(50,50),ponto(50, 20)))

//tela.appendChild(pontoVermelho)

//tela.appendChild(pontoVerde)
//tela.appendChild(pontoRoxo)

//tela.appendChild(quadrado(pontoVerde, pontoRoxo))

tela.appendChild(triangulo(pontoAzul, pontoRoxo, pontoVerde))