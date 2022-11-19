import { input } from './io_utils.js'

function main(){
    let objetivo = input('Objetivo: ')
    let valor_objetivo = Number(input('Valor do objetivo: '))
    const salario = Number(input('Salário: '))
    let aporte_porcentagem = Number(input('% de investimento: '))
    let taxa_de_juros = Number(input('Taxa de juros: '))

    let aporte_valor = salario * (aporte_porcentagem / 100)

    let saldo = 0
    let juros 
    let quantidade_de_meses = 0

    while (saldo < valor_objetivo){
        saldo += aporte_valor
        juros = saldo * (taxa_de_juros / 100)
        saldo += juros
        quantidade_de_meses++
        console.log(`Mês: ${quantidade_de_meses} - Juros do Mês: ${juros} - Saldo atual: ${saldo}`)
    }

    console.log(`Em ${quantidade_de_meses} meses seu objetivo (${objetivo}) será realizado.`)
    
}

main()
