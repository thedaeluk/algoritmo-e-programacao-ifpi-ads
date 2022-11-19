// 34. Leia 3 números, calcule e escreva a média dos números.

import {print, input} from './io_utils.js'

function main(){

    //Entrada
    const number1 = Number(input('Digite o primeiro número: '))
    const number2 = Number(input('Digite o segundo número: '))
    const number3 = Number(input('Digite o terceiro número: '))

    // Processamento 
    const media = (number1 + number2 + number3) / 3
        
    //Saída 
    print(`A média das 3 notas é: ${media.toFixed(2)}`)
    
}

main()