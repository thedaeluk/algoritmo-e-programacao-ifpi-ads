// 15. Leia o valor da base e altura de um triângulo, calcule e escreva sua área. (área=(base * altura)/2)

import {print, input} from './io_utils.js.js'

function main(){

    //Entrada
    const base_triangulo = Number(input('Digite o valor da base do triângulo: '))
    const altura_triangulo = Number(input('Digite o valor da altura do triângulo: '))
    
    // Processamento 
    const area_triangulo = (base_triangulo * altura_triangulo) / 2
    
    //Saída 
    print(`A área do triângulo é ${area_triangulo}`)
    
}

main()