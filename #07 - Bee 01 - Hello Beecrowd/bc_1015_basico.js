import {print, input} from './io_utils.js'

// Distância Entre Dois Pontos

function main(){

    //Entrada
    const p1 = input('Digite x1 e y1: ').split(' ')
    const x1 = Number(p1[0])
    const y1 = Number(p1[1])

    const p2 = input('Digite x2 e y2: ').split(' ')
    const x2 = Number(p2[0])
    const y2 = Number(p2[1])

    //Processamento
    const distancia = Math.sqrt(((x2 - x1) * (x2 - x1)) + ((y2 - y1) * (y2 - y1)))

    //Saida
    print(`${distancia.toFixed(4)}`)
     
}

main()