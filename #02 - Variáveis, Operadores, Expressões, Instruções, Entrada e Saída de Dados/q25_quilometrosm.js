// 25. Leia um número inteiro de metros, calcule e escreva quantos Km e quantos metros ele corresponde.

import {print, input} from './io_utils.js'

function main(){

    //Entrada
    const metros_input = Number(input('Digite o valor em m: '))

    // Processamento 
    const quilometros = Math.trunc(metros_input / 1000)
    const metros = metros_input % 1000
   
    //Saída 
    print(`O equivalente é ${quilometros} km e ${metros} m`)
    
}

main()