// 24. Leia um valor em m, calcule e escreva o equivalente em cm.

import {print, input} from './io_utils.js'

function main(){

    //Entrada
    const metros = Number(input('Digite o valor em m: '))

    // Processamento 
    const centimetros =  metros * 100
   
    //Saída 
    print(`O equivalente é : ${centimetros} cm`)
    
}

main()