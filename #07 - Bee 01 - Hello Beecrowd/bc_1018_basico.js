import {print, input} from './io_utils.js'

// Cédulas

function main(){

    //Entrada
    const valor_inteiro = Number(input('Digite um valor inteiro: '))

    // Processamento 
    const nota100 = Math.trunc(valor_inteiro / 100)
    const rest100 = valor_inteiro % 100

    const nota50 = Math.trunc(rest100 / 50)
    const rest50 = rest100 % 50
    
    const nota20 = Math.trunc(rest50 / 20)
    const rest20 = rest50 % 20

    const nota10 = Math.trunc(rest20 / 10)
    const rest10 = rest20 % 10

    const nota5 = Math.trunc(rest10 / 5)
    const rest5 = rest10 % 5

    const nota2 = Math.trunc(rest5 / 2)
    const rest2 = rest5 % 2

    const nota1 = Math.trunc(rest2 / 1)
   
    //Saída 
    print(`${valor_inteiro}`)
    print(`${nota100} nota(s) de R$ 100,00`)
    print(`${nota50} nota(s) de R$ 50,00`)
    print(`${nota20} nota(s) de R$ 20,00`)
    print(`${nota10} nota(s) de R$ 10,00`)
    print(`${nota5} nota(s) de R$ 5,00`)
    print(`${nota2} nota(s) de R$ 2,00`)
    print(`${nota1} nota(s) de R$ 1,00`)

}

main()