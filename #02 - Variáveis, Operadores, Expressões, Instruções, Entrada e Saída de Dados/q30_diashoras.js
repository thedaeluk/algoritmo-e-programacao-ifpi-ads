// 30. Leia um número inteiro de minutos, calcule e escreva quantos dias, quantas horas e quantos minutos ele corresponde

import {print, input} from './io_utils.js'

function main(){

    //Entrada
    const minutos_input = Number(input('Digite um número inteiro em minutos: '))

    // Processamento 
    const dias = Math.trunc(minutos_input / 1440)
    const resto = minutos_input % 1440
    const horas = Math.trunc(resto / 60)
    const minutos = resto % 60

    //Saída 
    print(`Esse valor corresponde à: ${dias} dia(s) ${horas} hora(s) e ${minutos} minuto(s)`)
    
}

main()