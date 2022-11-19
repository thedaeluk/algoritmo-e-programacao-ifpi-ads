// 7. Leia 3 números, calcule e escreva a soma dos 2 primeiros e a diferença entre os 2 últimos.

import {print, input} from './io_utils.js'

function main(){

    //Entrada
    const number1 = Number(input('Insira o número 1: '))
    const number2 = Number(input('Insira o número 2: '))
    const number3 = Number(input('Insira o número 3: '))

    // Processamento 
    const soma = number1 + number2
    const dif = number2 - number3

    //Saída 
    print(`A soma dos 2 primeiros é ${soma} e a diferença dos 2 últimos é ${dif}`)
}

main()