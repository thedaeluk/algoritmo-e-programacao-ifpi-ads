import {print, input} from './io_utils.js'

// Soma Simples

function main(){

    //Entrada
    const a = Number(input('Digite o valor da variável A: '))
    const b = Number(input('Digite o valor da variável B: '))

    //Processamento 
    const SOMA = a + b 

    //Saída
    print(`SOMA = ${SOMA}`)
}

main()