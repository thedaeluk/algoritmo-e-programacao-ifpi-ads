// 27. Leia um número inteiro de segundos, calcule e escreva quantas horas, quantos minutos e quantos segundos ele corresponde

import {print, input} from './io_utils.js'

function main(){

    //Entrada
    const segundos_input = Number(input('Digite uma quantidade de segundos: '))

    // Processamento 
    const horas = Math.trunc(segundos_input / 3600)
    const resto = segundos_input % 3600
    const minutos = Math.trunc(resto / 60)
    const segundos = resto % 60
   
    //Saída 
    print(`Esse valor corresponde à: ${horas} hora(s) ${minutos} minuto(s) e ${segundos} segundo(s)`)
    
}

main()