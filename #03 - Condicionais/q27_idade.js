import { input } from '../../io_utils.js'

/* Determine a idade de uma pessoa, em anos, meses e dias, dadas a data (dia, mês e ano) do seu 
nascimento e a data (dia, mês e ano) atual. */

function main(){

    // Entrada
    const data_atual = input('Digite a data atual (dia/mês/ano): ').split('/').map(Number)
    const data_nascimento = input('Digite a data de nascimento (dia/mês/ano): ').split('/').map(Number)
    
    // Processamento 
    const idade = calculo_idade(data_atual, data_nascimento)

    // Saída
    console.log(idade)

}

function calculo_idade(data_atual, data_nascimento){
    const [dia_atual, mes_atual, ano_atual]  = data_atual
    const [dia_nascimento, mes_nascimento, ano_nascimento]  = data_nascimento

    if(ano_atual >= ano_nascimento){
        let dias_totais = (dia_atual + (30 * mes_atual) + (365 * ano_atual)) - (dia_nascimento + (30 * mes_nascimento) + (365 * ano_nascimento))

        const anos = Math.trunc(dias_totais / 365)
        const resto_anos = dias_totais % 365

        const meses = Math.trunc(resto_anos / 30)
        const dias = resto_anos % 30

        return `Sua idade é ${anos} anos, ${meses} meses e ${dias} dias.`

    } else{
        return 'Erro!'

    }
}

main()