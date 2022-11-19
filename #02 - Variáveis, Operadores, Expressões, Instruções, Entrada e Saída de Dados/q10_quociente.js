// 10. Leia 2 números inteiros, calcule e escreva o quociente e o resto da divisão do 1º pelo 2º.

import {print, input} from './io_utils.js'

function main(){

    //Entrada
    const number1 = Number(input('Insira o número 1: '))
    const number2 = Number(input('Insira o número 2: '))

    // Processamento 
    const quociente = number1 / number2
    const resto = number1 % number2
   
    //Saída 
    print(`O quociente da operação é ${quociente} e seu resto é ${resto}`)
}

main()