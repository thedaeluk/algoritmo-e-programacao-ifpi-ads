// 32. Leia um número inteiro (3 dígitos), calcule e escreva a diferença entre o número e seu inverso.

import {print, input} from './io_utils.js'

function main(){

    //Entrada
    const number_inteiro = input('Digite um número inteiro (3 dígitos): ')

    // Processamento
    const inverso = Number(number_inteiro.split("").reverse().join(""))
    const dif = Number(number_inteiro) - inverso
   
    //Saída 
    print(`A diferença entre o número e seu inverso é: ${dif}`)
    
}

main()