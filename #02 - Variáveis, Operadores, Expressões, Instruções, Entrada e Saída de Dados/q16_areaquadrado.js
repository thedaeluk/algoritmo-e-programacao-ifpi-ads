// 16. Leia o valor do lado de um quadrado, calcule e escreva sua área. (área = lado^2)

import {print, input} from './io_utils.js'

function main(){

    //Entrada
    const lado = Number(input('Digite o valor do lado do quadrado: '))
    
    // Processamento 
    const area_quadrado = (lado * lado)
    
    //Saída 
    print(`A área do quadrado é ${area_quadrado}`)
    
}

main()