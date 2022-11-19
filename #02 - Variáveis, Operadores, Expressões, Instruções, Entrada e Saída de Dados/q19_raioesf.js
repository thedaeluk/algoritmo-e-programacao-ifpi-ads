// 19. Leia o valor do raio de uma esfera, calcule e escreva seu volume. (v = (4 * pi * r^3) / 3) (pi = 3,14)

import {print, input} from './io_utils.js'

function main(){

    //Entrada
    const pi = 3.14
    const raio_esfera = Number(input('Digite o valor do raio da esfera: '))

    // Processamento 
    const volume_esfera = (4 * pi * raio_esfera ** 3) / 3

    //Saída 
    print(`O volume da esfera é ${volume_esfera.toFixed(2)}`)
    
}

main()