// 45. Um algoritmo para gerenciar os saques de um caixa eletrônico deve possuir algum mecanismo para
// decidir o numero de notas de cada valor que deve ser disponibilizado para o cliente que realizou o
// saque. Um possível critério seria o da "distribuição ótima" no sentido de que as notas de menor valor
// disponíveis fossem distribuídas em número mínimo possível. Por exemplo, se a maquina só dispõe de
// notas de R$ 50, de R$ 10, de R$ 5 e de R$ 1, para uma quantia solicitada de R$ 87, o algoritmo deveria
// indicar uma nota de R$ 50, três notas de R$ 10, uma nota de R$ 5 e duas notas de R$ 1. Escreva um
// algoritmo que receba o valor da quantia solicitada e retorne a distribuição das notas de acordo com o
// critério da distribuição ótima.

import {print, input} from './io_utils.js'

function main(){

    //Entrada
    const saque = Number(input('Digite o valor do saque: '))

    // Processamento 
    const notas50 = Math.trunc(saque / 50)
    const resto50 = saque % 50
    const notas10 = Math.trunc(resto50 / 10)
    const resto10 = resto50 % 10
    const notas5 = Math.trunc(resto10 / 5)
    const resto5 = resto10 % 5
    const notas1 = Math.trunc(resto5 / 1)
   
    //Saída 
    print(`A distribuição das notas vai ser: ${notas50} de R$ 50, ${notas10} de R$ 10, ${notas5} de R$ 5 e ${notas1} de R$ 1`)
    
}

main()