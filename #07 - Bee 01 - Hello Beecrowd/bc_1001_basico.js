import {print, input} from './io_utils.js'

// Extremamente Básico

function main(){

    //Entrada 
    const a = Number(input('Digite o valor a: '))
    const b = Number(input('Digite o valor b: '))
    
    //Processamento
    const x = a + b

    //Saida
    print(`X = ${x}`)
}

main()