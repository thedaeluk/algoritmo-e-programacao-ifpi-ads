import {print, input} from './io_utils.js'

// Esfera

function main(){

    //Entrada
    const pi = 3.14159
    const raio = input('Digite o raio da esfera: ')

    //Processamento
    const volume_esfera = (4 / 3) * pi * (raio * raio * raio)

    //Saida
    print(`VOLUME = ${volume_esfera.toFixed(3)}`)
    
}

main()