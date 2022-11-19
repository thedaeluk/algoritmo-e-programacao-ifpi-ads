// 28. Leia um número inteiro de horas, calcule e escreva quantas semanas, quantos dias e quantas horas ele corresponde.

import {print, input} from './io_utils.js'

function main(){

    //Entrada
    const horas_input = Number(input('Digite uma quantidade de horas: '))

    // Processamento 
    const semanas = Math.trunc(horas_input / 168)
    const resto = horas_input % 168
    const dias = Math.trunc(resto / 24)
    const horas = resto % 24
   
    //Saída 
    print(`Esse valor corresponde à: ${semanas} semana(s) ${dias} dia(s) e ${horas} hora(s)`)
    
}

main()