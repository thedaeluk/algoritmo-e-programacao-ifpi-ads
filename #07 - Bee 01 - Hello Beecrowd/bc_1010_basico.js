import {print, input} from './io_utils.js'

// Cálculo Simples

function main(){

    //Entrada
    const peca1 = input('Digite o código de uma peça 1, o número de peças 1 e o valor unitário de cada peça 1: ').split(' ')
    const codigo_peca1 = Number(peca1[0])
    const numero_peca1 = Number(peca1[1])
    const valor_uni1 = Number(peca1[2])

    const peca2 = input('Digite o código de uma peça 2, o número de peças 2 e o valor unitário de cada peça 2: ').split(' ')
    const codigo_peca2 = Number(peca2[0])
    const numero_peca2 = Number(peca2[1])
    const valor_uni2 = Number(peca2[2])

    //Processamento
    const valor1 = numero_peca1 * valor_uni1
    const valor2 = numero_peca2 * valor_uni2
    const total = valor1 + valor2

    //Saida 
    print(`VALOR A PAGAR: R$ ${total.toFixed(2)}`)
}

main()