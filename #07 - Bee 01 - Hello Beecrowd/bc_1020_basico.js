import {print, input} from './io_utils.js'

// Idade em Dias

function main(){

    //Entrada
    const valor_idade = Number(input('Digite a idade de uma pessoa em dias: '))

    // Processamento
    const valor_anos = Math.trunc(valor_idade / 365)
    const resto_anos = valor_idade % 365

    const valor_meses = Math.trunc(resto_anos / 30) 

    const valor_dias = Math.trunc(resto_anos % 30)
    
    
    //Saída
    print(`${valor_anos} ano(s)`)
    print(`${valor_meses} mes(es)`)
    print(`${valor_dias} dia(s)`)
}

main()