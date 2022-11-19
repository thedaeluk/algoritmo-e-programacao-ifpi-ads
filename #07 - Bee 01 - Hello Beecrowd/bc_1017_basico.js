import {print, input} from './io_utils.js'

// Gasto de Combustível

function main(){

    //Entrada
    const tempo_viagem = Number(input('Digite o tempo gasto na viagem em horas: '))
    const velocidade_media =  Number(input('Digite a velocidade média em km/h: '))

    //Processamento
    const distancia_percorrida = tempo_viagem * velocidade_media 
    const quantidade_litros = distancia_percorrida / 12
    
    //Saida
    print(`${quantidade_litros.toFixed(3)}`)
     
}

main()