// 21. Leia uma temperatura em °F, calcule e escreva a equivalente em °C. (t°C = (5 * t°F - 160) / 9).

import {print, input} from './io_utils.js'

function main(){

    //Entrada
    const fahrenheit = Number(input('Digite uma temperatura em °F: '))

    // Processamento 
    const celcius = (5 * fahrenheit - 160) / 9
   
    //Saída 
    print(`A temperatura em °C é: ${celcius.toFixed(2)}`)
    
}

main() 