// 12. Leia o salário de um trabalhador e escreva seu novo salário com um aumento de 25%.

import {print, input} from './io_utils.js'

function main(){

    //Entrada
    const salario = Number(input('Digite o valor do salário:'))

    // Processamento 
    const aumento = salario + (salario * 0.25)
   
    //Saída 
    print(`O valor do novo salário é ${aumento} reais`)
}

main()