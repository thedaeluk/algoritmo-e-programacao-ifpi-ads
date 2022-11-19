import {print, input} from './io_utils.js'

// Diferença

function main(){

    //Entrada
    const a = Number(input('Digite o primeiro valor: '))
    const b = Number(input('Digite o segundo valor: '))
    const c = Number(input('Digite o terceiro valor '))
    const d = Number(input('Digite o quarto valor: '))
    
    //Processamento
    const DIFERENCA = (a * b) - (c * d)

    //Saida 
    print(`DIFERENCA = ${DIFERENCA}`)
}

main()