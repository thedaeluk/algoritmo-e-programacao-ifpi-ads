import {print, input} from './io_utils.js'

// Conversão de Tempo

function main(){

    //Entrada
    const valor_tempo = Number(input('Digite um valor em segundos: '))

    // Processamento
    const valor_horas = Math.trunc(valor_tempo / 3600)
    const resto_horas = valor_tempo % 3600

    const valor_minutos = Math.trunc(resto_horas / 60)
    
    const valor_segundos = resto_horas % 60
    
    //Saída
    print(`${valor_horas}:${valor_minutos}:${valor_segundos}`)
    
}

main()