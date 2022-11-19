// 2. Leia um valor em horas e um valor em minutos, calcule e escreva o equivalente em minutos.

import {print, input} from './io_utils.js';

function main(){
    
    // Entrada
    const horas = Number(input('Insira um valor em horas: '))
    const minutos = Number(input('Insira um valor em minutos: '))

    //Processamento
    const final = (horas * 60) + minutos

    // Saída
    print(`O equivalente é ${final} minutos`)
}
   
main()