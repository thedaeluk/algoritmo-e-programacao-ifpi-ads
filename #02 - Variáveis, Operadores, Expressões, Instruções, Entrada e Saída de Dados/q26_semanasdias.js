// 26. Leia um número inteiro de dias, calcule e escreva quantas semanas e quantos dias ele corresponde.

import {print, input} from './io_utils.js'

function main(){

    //Entrada
    const dias_input = Number(input('Digite um número inteiro de dias: '))

    // Processamento 
    const semanas = Math.trunc(dias_input / 7)
    const dias = dias_input % 7
   
    //Saída 
    print(`O equivalente é ${semanas} semana(s) e ${dias} dia(s)`)
    
}

main()