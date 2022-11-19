// 6. Leia uma velocidade em km/h, calcule e escreva esta velocidade em m/s. (Vm/s = Vkm/h / 3.6)

import {print, input} from './io_utils.js'

function main(){
    
    // Entrada
    const velocidade_kmh = Number(input('Insira a velocidade em km/h: '))

    // Processamento 
    const velocidade_ms = velocidade_kmh / 3.6

    // Saída
    print(`A velocidade é ${velocidade_ms} m/s`)
}

main()