// 11. Leia um número inteiro (3 dígitos) e escreva o inverso do número. (Ex.: número = 532 ; inverso = 235)

import {print, input} from './io_utils.js'

function main(){

    //Entrada
    const number = input('Insira um valor de 3 dígitos: ')

    // Processamento 
    const inverso = Number(number.split("").reverse().join(""))
    
    //Saída 
    print(`O número invertido é ${inverso}`)
    
}

main()