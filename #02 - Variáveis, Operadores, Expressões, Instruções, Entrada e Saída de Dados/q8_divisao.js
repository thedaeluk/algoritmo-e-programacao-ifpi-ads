// 8. Leia 2 números, calcule e escreva a divisão da soma pela subtração dos números lidos.

import {print, input} from './io_utils.js'

function main(){

    //Entrada
    const number1 = Number(input('Insira o número 1:'))
    const number2 = Number(input('Insira o número 2:'))

    // Processamento 
    const div = (number1 + number2) / (number1 - number2)
   
    //Saída 
    print(`A divisão da soma pela subtração dos números lidos é ${div.toFixed(2)}`)
}

main()