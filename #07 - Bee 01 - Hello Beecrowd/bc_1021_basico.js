import {print, input} from './io_utils.js'

// Notas e Moedas

function main(){

    //Entrada
    const valor_decimal = Number(input('Digite um valor com duas casas decimais: '))

    // Processamento 
    const nota_100 = Math.trunc(valor_decimal / 100)
    const rest_100 = valor_decimal % 100

    const nota_50 = Math.trunc(rest_100 / 50)
    const rest_50 = rest_100 % 50
    
    const nota_20 = Math.trunc(rest_50 / 20)
    const rest_20 = rest_50 % 20

    const nota_10 = Math.trunc(rest_20 / 10)
    const rest_10 = rest_20 % 10

    const nota_5 = Math.trunc(rest_10 / 5)
    const rest_5 = rest_10 % 5

    const nota_2 = Math.trunc(rest_5 / 2)
    const rest_2 = rest_5 % 2

    const coin_1 = Math.trunc(rest_2 / 1)
    const rest_1 = rest_2 % 1

    const coin_05 = Math.trunc(rest_1 / 0.5)
    const rest_05 = rest_1 % 0.5
    
    const coin_025 = Math.trunc(rest_05 / 0.25)
    const rest_025 = rest_05 % 0.25

    const coin_010 = Math.trunc(rest_025 / 0.10)
    const rest_010 = rest_025 % 0.10

    const coin_005 = Math.trunc(rest_010 / 0.05)
    const rest_005 = rest_010 % 0.05

    const coin_001 = Math.trunc(rest_005 / 0.01)
    
   
    //Saída 
    print(`NOTAS:`)
    print(`${nota_100} nota(s) de R$ 100.00`)
    print(`${nota_50} nota(s) de R$ 50.00`)
    print(`${nota_20} nota(s) de R$ 20.00`)
    print(`${nota_10} nota(s) de R$ 10.00`)
    print(`${nota_5} nota(s) de R$ 5.00`)
    print(`${nota_2} nota(s) de R$ 2.00`)

    print(`MOEDAS:`)
    print(`${coin_1} moeda(s) de R$ 1.00`)
    print(`${coin_05} moeda(s) de R$ 0.50`)
    print(`${coin_025} moeda(s) de R$ 0.25`)
    print(`${coin_010} moeda(s) de R$ 0.10`)
    print(`${coin_005} moeda(s) de R$ 0.05`)
    print(`${coin_001} moeda(s) de R$ 0.01`)
    
}

main()