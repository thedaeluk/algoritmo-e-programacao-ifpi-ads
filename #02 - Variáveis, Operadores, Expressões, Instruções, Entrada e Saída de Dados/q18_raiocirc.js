// 18. Leia o valor do raio de uma circunferência, calcule e escreva seu comprimento.(c = 2 * pi * r)

import {print, input} from './io_utils.js'

function main(){

    //Entrada
    const pi = 3.14
    const raio_circunf = Number(input('Digite o valor do raio da circunferêcia: '))

    // Processamento 
    const comprimento_circunf = 2 * pi * raio_circunf 
    
    //Saída 
    print(`O comprimento da circunferência é ${comprimento_circunf.toFixed(2)}`)
}

main()