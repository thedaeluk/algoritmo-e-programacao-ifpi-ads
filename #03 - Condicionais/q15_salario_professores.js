import { input } from '../../io_utils.js'

/* 15. Leia a quantidade de horas aula dadas por dois professores e o valor por hora recebido por cada 
um. Escreva na tela qual dos professores tem salário total maior. */

function main(){
    //Entrada
    const horas_aula1 = Number(input('Digite a quantidade de horas aula dadas pelo professor 1: '))
    const valor_hora1 = Number(input('Digite o valor por hora recebido pelo professor 1: '))

    const horas_aula2 = Number(input('Digite a quantidade de horas aula dadas pelo professor 2: '))
    const valor_hora2 = Number(input('Digite o valor por hora recebido pelo professor 2: '))


    //Processamento
    const salário_total_maior = maior_salario(horas_aula1, valor_hora1, horas_aula2, valor_hora2)

    //Saída
    console.log(salário_total_maior)
}

function maior_salario(horas_aula1, valor_hora1, horas_aula2, valor_hora2){
    //Calcular Salário
    const salario_professor1 = horas_aula1 * valor_hora1
    const salario_professor2 = horas_aula2 * valor_hora2

    if(salario_professor1 > salario_professor2){
        return 'O professor 1 tem um salário total maior.'

    } else if(salario_professor2 > salario_professor1){
        return 'O professor 2 tem um salário total maior.'
        
    } else{
        return 'Os salários são iguais.'
    }

}

main()