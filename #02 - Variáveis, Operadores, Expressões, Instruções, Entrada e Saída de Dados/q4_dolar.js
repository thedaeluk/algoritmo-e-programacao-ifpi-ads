// 4. Leia o valor do dólar, calcule e escreva o equivalente em real (R$).

import {print, input} from './io_utils.js'

function main(){

    //Entrada 
    print('1 dólar americano é igual a 4.76 reais brasileiros.')
    const dol = Number(input('Digite um valor em dolar: '))

    //Processamento
    const real = dol * 4.76

    //Saída 
    print(`O equivalente é ${real.toFixed(2)} reais`)
}

main()