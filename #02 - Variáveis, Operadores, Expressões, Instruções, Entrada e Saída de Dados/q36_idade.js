// 36. Leia a idade de uma pessoa expressa em anos, meses e dias e escreva-a expressa apenas em dias.

import {print, input} from './io_utils.js'

function main(){

    //Entrada
    const anos_input = Number(input('Escreva uma idade em anos: '))
    const meses_input = Number(input('Escreva uma idade em meses: '))
    const dias_input = Number(input('Escreva uma idade em dias: '))

    // Processamento 
    const dias = (anos_input * 365) + (meses_input * 30) + dias_input
   
    //Saída 
    print(`A idade em dias é: ${dias}`)
    
}

main()