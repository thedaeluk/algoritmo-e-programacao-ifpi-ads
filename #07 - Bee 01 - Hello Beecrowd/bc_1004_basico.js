import {print, input} from './io_utils.js'

//Produto Simples

function main(){

    //Entrada
    const a = Number(input('Digite o primeiro valor: '))
    const b = Number(input('Digite o segundo valor: '))

    //Processamento
    const PROD = a * b
    
    //Saída
    print(`PROD = ${PROD}`)
}

main()