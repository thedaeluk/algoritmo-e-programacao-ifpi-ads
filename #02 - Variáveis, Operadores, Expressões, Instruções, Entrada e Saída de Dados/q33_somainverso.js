// 33. Leia um número inteiro (3 dígitos), calcule e escreva a soma do número com seu inverso. (Ex.: número = 532 ; inverso = 235 ; soma = 532 + 235 = 767).

import {print, input} from './io_utils.js'

function main(){

    //Entrada
    const number_inteiro = input('Digite um número inteiro (3 dígitos): ')

    // Processamento
    const inverso = Number(number_inteiro.split("").reverse().join(""))
    const soma = Number(number_inteiro) + inverso
   
    //Saída 
    print(`A soma entre o número e seu inverso é: ${soma}`)
    
}

main()