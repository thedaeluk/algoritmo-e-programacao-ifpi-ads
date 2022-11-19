import {print, input} from './io_utils.js'

// Salário com Bônus

function main(){

    //Entrada
    const nome_vendedor = Number(input('Digite o nome do vendedor: '))
    const salario_fixo = Number(input('Digite seu salário fixo: '))    
    const total_vendas = Number(input('Digite o total de vendas: '))

    //Processamento
    const TOTAL = salario_fixo + (total_vendas * 0.15)

    //Saida 
    print(`TOTAL = R$ ${TOTAL.toFixed(2)}`)
}

main()