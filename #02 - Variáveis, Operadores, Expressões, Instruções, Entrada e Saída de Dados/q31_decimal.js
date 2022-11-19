// 31. Leia um número inteiro (4 dígitos binários), calcule e escreva o equivalente na base decimal.

import {print, input} from './io_utils.js'

function main(){

    //Entrada
    const number_binario = Number(input('Digite um número inteiro (4 dígitos binários): '))

    // Processamento 
    const number_decimal = Number(parseInt(number_binario, 2))
   
    //Saída 
    print(`O equivalente na base decimal é: ${number_decimal}`)
    
}

main()