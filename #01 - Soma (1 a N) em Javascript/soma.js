import {print, input} from '../io_utils.js'

function main(){
    // Entrada
    const inicial = 1
    let n = Number(input('Digite um valor n: '))

    //Processamento
    let soma = (n + inicial) * (n / 2)
    
    //Saída
    print(`A soma de 1 até ${n} é ${soma}`)
}

main()