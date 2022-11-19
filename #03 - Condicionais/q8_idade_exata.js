import { input } from '../../io_utils.js'

/* 8. Leia data atual (dia, mês e ano) e data de nascimento (dia, mês e ano) de uma pessoa, calcule e 
escreva sua idade exata (em anos). */

function main(){

    // Entrada
    const [dia_atual, mes_atual, ano_atual] = input('Digite a data atual (dia/mês/ano): ').split('/').map(Number)
    const [dia_nascimento, mes_nascimento, ano_nascimento] = input('Digite a data de nascimento (dia/mês/ano): ').split('/').map(Number)
    
    // Processamento 
    const idade_exata = calculo_idade_exata(ano_atual, ano_nascimento)

    // Saída
    console.log(idade_exata)

}

function calculo_idade_exata(ano_atual, ano_nascimento){
    let idade

    if(ano_atual >= ano_nascimento){
        idade = ano_atual - ano_nascimento
        return `Sua idade é ${idade} anos.`

    } else{
        return 'Erro!'

    }


}

main()