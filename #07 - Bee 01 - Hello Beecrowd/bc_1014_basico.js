import {print, input} from './io_utils.js'

// Consumo

function main(){

    //Entrada
    const X = Number(input('Digite a distância total em km: '))
    const Y = Number(input('Digite o total de combustível gasto em litros: '))

    
    //Processamento
    const consumo_medio = X / Y


    //Saida
    print(`${consumo_medio.toFixed(3)} km/l`)
     
}

main()