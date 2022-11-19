// 5. Leia um número inteiro (3 dígitos), calcule e escreva a soma de seus elementos (C + D + U).

import {print, input} from './io_utils.js'

function main(){

    //Entrada
    const number = input('Insira um valor de 3 dígitos: ')

    const cent = Number(number[0])
    const dez = Number(number[1])
    const uni = Number(number[2])

    // Processamento 
    const somae = cent + dez + uni 

    //Saída 
    print(`A soma dos elementos é ${somae}`)
}
main()