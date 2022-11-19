// 29. Leia um número inteiro de meses, calcule e escreva quantos anos e quantos meses ele corresponde.

import {print, input} from './io_utils.js'

function main(){

    //Entrada
    const meses_input = Number(input('Digite uma quantidade de meses: '))

    // Processamento 
    const anos = Math.trunc(meses_input / 12)
    const meses = Math.trunc(meses_input % 12)

   
    //Saída 
    print(`Esse valor corresponde à: ${anos} ano(s) e ${meses} meses`)
    
}

main()