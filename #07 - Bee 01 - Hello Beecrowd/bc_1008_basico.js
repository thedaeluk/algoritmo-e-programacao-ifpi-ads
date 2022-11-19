import {print, input} from './io_utils.js'

// Salário

function main(){

    //Entrada
    const numero_funcionario = Number(input('Digite o número do funcionário: '))
    const horas_trabalho = Number(input('Digite o número de horas trabalhadas: '))
    const valor_hora = Number(input('Digite o valor que recebe por hora: '))

    //Processamento
    const SALARY = horas_trabalho * valor_hora

    //Saida 
    print(`NUMBER = ${numero_funcionario}`)
    print(`SALARY = U$ ${SALARY.toFixed(2)}`)
}

main()