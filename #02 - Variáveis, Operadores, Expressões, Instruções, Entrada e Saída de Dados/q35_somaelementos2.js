// 35. Leia um número inteiro (4 dígitos), calcule e escreva a soma dos elementos que o compõem. Ex.: número = 9534 ; soma = 9+5+3+4 = 21.

import {print, input} from './io_utils.js'

function main(){

    //Entrada
    const number = input('Insira um número inteiro de 4 dígitos: ')

    const number1 = Number(number[0])
    const number2 = Number(number[1])
    const number3 = Number(number[2])
    const number4 = Number(number[3])

    // Processamento 
    const somae = number1 + number2 + number3 + number4 

    //Saída 
    print(`A soma dos elementos é ${somae}`)
    
}

main()