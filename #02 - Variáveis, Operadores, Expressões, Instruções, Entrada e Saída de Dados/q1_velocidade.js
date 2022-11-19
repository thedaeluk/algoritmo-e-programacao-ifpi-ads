// 1. Leia uma velocidade em m/s, calcule e escreva esta velocidade em km/h. (Vkm/h = Vm/s * 3.6)

import {print, input} from './io_utils.js'

function main(){
    // Entrada
    const velocidade_ms = Number(input('Insira a velocidade em m/s: '))

    // Processamento 
    const velocidade_kmh = velocidade_ms * 3.6

    // Saída
    print(`A velocidade é ${velocidade_kmh} km/h`)
}

main()