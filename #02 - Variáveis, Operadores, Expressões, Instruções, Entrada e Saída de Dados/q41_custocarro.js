// 41. O custo ao consumidor de um carro novo é a soma do custo de fábrica com a percentagem do
// distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que a percentagem do distribuidor
// seja de 28% e os impostos de 45%, escreva um algoritmo que leia o custo de fábrica de um carro e
// escreva o custo ao consumidor.

import {print, input} from './io_utils.js'

function main(){

    //Entrada
    const custo_fabrica = Number(input('Digite o custo de fábrica: '))
    const perc_distribuidor = 0.28
    const perc_impostos = 0.45

    // Processamento
    const distribuidor = custo_fabrica * perc_distribuidor
    const impostos = custo_fabrica * perc_impostos
    const custo_consumidor = custo_fabrica + distribuidor + impostos;
    
    //Saída 
    print(`O custo ao consumidor é: ${custo_consumidor} reais`)
    
}

main()