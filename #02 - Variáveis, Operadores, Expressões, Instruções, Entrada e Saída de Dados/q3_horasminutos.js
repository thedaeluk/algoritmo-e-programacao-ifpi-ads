// 3. Leia um valor em minutos, calcule e escreva o equivalente em horas e minutos.

import {print, input} from './io_utils.js';

function main(){

    // Entrada
    const inicial = Number(input('Insira um valor em minutos: '))
   
    //Processamento
    const horas = inicial / 60
    const minutos = inicial % 60

    // Saída
    print(`O equivalente é ${Math.trunc(horas)} horas e ${minutos} minutos`)   
}
      
main()