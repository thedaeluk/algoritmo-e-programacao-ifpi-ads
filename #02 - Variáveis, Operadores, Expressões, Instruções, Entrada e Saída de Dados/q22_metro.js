// 22. Leia um valor em km, calcule e escreva o equivalente em m.

import {print, input} from './io_utils.js'

function main(){

    //Entrada
    const quilometros = Number(input('Digite o valor em km: '))

    // Processamento 
    const metros = quilometros * 1000
   
    //Saída 
    print(`O equivalente é : ${metros} m`)
    
}

main()