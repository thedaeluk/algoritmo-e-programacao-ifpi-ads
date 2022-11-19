// 14. Leia 3 notas de um aluno e o peso de cada nota, calcule e escreva a média ponderada.

import {print, input} from './io_utils.js'

function main(){

    //Entrada
    const nota1 = Number(input('Digite a primeira nota: '))
    const nota2 = Number(input('Digite a segunda nota: '))
    const nota3 = Number(input('Digite a terceira nota: '))
    const peso1 = Number(input('Digite o peso 1: '))
    const peso2 = Number(input('Digite o peso 2: '))
    const peso3 = Number(input('Digite o peso 3: '))

    // Processamento 
    const media_ponderada = ((nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3)) / (peso1 + peso2 + peso3)
        
    //Saída 
    print(`A média ponderada das 3 notas é: ${media_ponderada.toFixed(2)}`)
    
}

main()