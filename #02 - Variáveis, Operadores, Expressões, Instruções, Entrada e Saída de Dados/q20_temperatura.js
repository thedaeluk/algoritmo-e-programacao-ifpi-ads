// 20. Leia uma temperatura em °C, calcule e escreva a equivalente em °F. (t°F = (9 * t°C + 160) / 5)

import {print, input} from './io_utils.js'

function main(){

    //Entrada
    const celcius = Number(input('Digite uma temperatura em °C: '))

    // Processamento 
    const fahrenheit = (9 * celcius + 160) / 5 
   
    //Saída 
    print(`A temperatura em °F é: ${fahrenheit.toFixed(2)}`)
}

main()