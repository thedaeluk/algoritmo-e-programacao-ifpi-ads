// 42. Escreva um algoritmo que, tendo como dados de entrada 2 pontos quaisquer no plano, ponto1 (x1,y1) e
// ponto2 (x2,y2), escreva a distância entre eles, conforme fórmula abaixo.

import {print, input} from './io_utils.js'

function main(){

    //Entrada
    const pontox1 = Number(input('Escreva a coordenada x do ponto 1: '))
    const pontoy1 = Number(input('Escreva a coordenada y do ponto 1: ')) 
    const pontox2 = Number(input('Escreva a coordenada x do ponto 2: ')) 
    const pontoy2 = Number(input('Escreva a coordenada y do ponto 2: ')) 

    // Processamento 
    const distancia = Math.sqrt(((pontox2 - pontox1) ** 2) + ((pontoy2 - pontoy1) ** 2))
   
    //Saída 
    print(`A distância entre dois pontos é: ${(distancia.toFixed(2))}`)
    
}

main()