// 44. Sabendo que latão é constituído de 70% de cobre e 30% de zinco, escreva um algoritmo que calcule a quantidade de cada um desses componentes para se obter certa quantidade de latão (em kg), informada pelo usuário.

import {print, input} from './io_utils.js'

function main(){

    //Entrada
    const lat = Number(input('Escreva a quantidade de latão (kg): '))

    // Processamento 
    const cobre = lat * 0.7
    const zinco = lat * 0.3
   
    //Saída 
    print(`A quantidade de cobre é ${cobre} kg e a quantidade de zinco é ${zinco} kg.`)
    
}

main()