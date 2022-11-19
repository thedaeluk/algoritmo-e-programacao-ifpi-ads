// 38. Leia 2 (duas) frações (numerador e denominador), calcule e escreva a soma destas frações, escrevendo o resultado em forma de fração.

import {print, input} from './io_utils.js'

function main(){

    //Entrada
    const numerador1 = Number(input('Escreva o numerador 1: '))
    const denominador1 = Number(input('Escreva o denominador 1: '))

    const numerador2 = Number(input('Escreva o numerador 2: '))
    const denominador2 = Number(input('Escreva o denominador 2: '))
    
    // Processamento 
    const denominador = denominador1 * denominador2
    const numerador = (denominador / denominador1) * numerador1 + (denominador / denominador2) * numerador2

    //Saída 
    print(`A soma das frações é ${numerador}/${denominador}`)
    
}

main()