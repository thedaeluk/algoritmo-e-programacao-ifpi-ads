// 37. Leia a idade de uma pessoa expressa em dias e escreva-a expressa em anos, meses e dias.

import {print, input} from './io_utils.js'

function main(){

    //Entrada
    const dias_input = Number(input('Escreva uma idade em dias: '))

    // Processamento
    const anos = Math.trunc(dias_input / 365)
    const resto = dias_input % 365
    const meses = Math.trunc(resto / 30)
    const dias = resto % 30    
   
    //Saída 
    print(`Sua idade equivalente em anos, meses e dias é: ${anos} anos, ${meses} meses e ${dias} dias`)
    
}

main()