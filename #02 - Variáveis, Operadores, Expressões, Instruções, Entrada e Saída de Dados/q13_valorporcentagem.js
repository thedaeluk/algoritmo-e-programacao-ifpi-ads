// 13. Leia um valor em real (R$), calcule e escreva 70% deste valor.

import {print, input} from './io_utils.js'

function main(){

    //Entrada
    const real = Number(input('Digite um valor em real:'))

    // Processamento
    const porcentagem = real * 0.7 
    
    //Saída 
    print(`70% desse valor é ${porcentagem} reais`)

}

main()