// 17. Leia o valor da base e altura de um retângulo, calcule e escreva sua área. (área = base * altura)

import {print, input} from './io_utils.js'

function main(){

    //Entrada
    const base_retangulo = Number(input('Digite o valor da base do retângulo: '))
    const altura_retangulo = Number(input('Digite o valor da altura do retângulo: '))
    
    // Processamento 
    const area_retangulo = (base_retangulo * altura_retangulo) / 2
    
    //Saída 
    print(`A área do retângulo é ${area_retangulo}`)
    
}

main()