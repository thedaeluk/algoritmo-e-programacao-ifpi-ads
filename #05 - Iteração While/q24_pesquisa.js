/* A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o salário e
número de filhos. Escreva um algoritmo que leia o salário e o número de filhos de N habitantes e
escreva:
a) média de salário da população;
b) média de número de filhos;
c) percentual de pessoas com salário de até R$ 1.000,00. */

import {print} from '../io_utils.js'
import {get_number, calculate_average, calculate_percentage} from '../input_utils.js'

function main(){
    const numero_de_habitantes = get_number('Número de habitantes: ')

    let soma_salario = 0
    let soma_filhos = 0
    let count = 0

    let i = 1
    
    while (i <= numero_de_habitantes){
        print(`\nDados do habitante ${i}`)

        let salario = get_number('Salário: ')
        let numero_de_filhos = get_number('Número de filhos: ')

        soma_salario += salario
        soma_filhos += numero_de_filhos

        if (salario <= 1000){
            count++
        }

        i++
    }

    const media_do_salario = calculate_average(soma_salario, numero_de_habitantes)
    const media_de_filhos = calculate_average(soma_filhos, numero_de_habitantes)
    const percentage = calculate_percentage(count, numero_de_habitantes)

    print(`\nMédia de salário da população: R$ ${media_do_salario.toFixed(2)}`)
    print(`Média de número de filhos: ${media_de_filhos}`)
    print(`Percentual de pessoas com salário de até R$ 1.000,00: ${percentage.toFixed(2)}%`)
}

main()