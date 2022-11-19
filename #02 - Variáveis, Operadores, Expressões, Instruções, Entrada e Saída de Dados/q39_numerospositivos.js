// 39. Leia três números inteiros e positivos (A, B, C) e calcule a seguinte expressão:

import {print, input} from './io_utils.js'

function main(){

    //Entrada
    const A = Number(input('Digite um número A (Inteiro e positivo): '))
    const B = Number(input('Digite um número B (Inteiro e positivo): '))
    const C = Number(input('Digite um número C (Inteiro e positivo): '))

    // Processamento 
    const R = (A + B) ** 2 
    const S = (B + C) ** 2
    const D = (R + S) / 2
    
    //Saída 
    print(`O valor da expressão é: ${D}`)
    
}

main()