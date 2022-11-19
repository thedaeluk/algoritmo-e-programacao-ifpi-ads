//9. Leia 2 números (A, B) e escreva-os em ordem inversa (B, A).

import {print, input} from './io_utils.js'

function main(){

    //Entrada
    const number_a = Number(input('Insira o número A: '))
    const number_b = Number(input('Insira o número B: '))
   
    //Saída 
    print(`${number_b}, ${number_a}`)
}

main()