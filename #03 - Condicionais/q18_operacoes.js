import { input } from '../../io_utils.js'

/* 18. Leia dois valores e uma das seguintes operações a serem executadas (codificadas da seguinte 
forma: 1 — Adição, 2 — Subtraçâo, 3 — Multiplicação e 4 — Divisão). Calcule e escreva o resultado 
dessa operação sobre os dois valores lidos. */

function main(){
    //Entrada
    const valor1 = Number(input('Digite o primeiro valor: '))
    const valor2 = Number(input('Digite o segundo valor: '))

    const operacao = Number(input('Escolha uma das seguintes operações: 1 — Adição, 2 — Subtraçâo, 3 — Multiplicação e 4 — Divisão: '))

    //Processamento
    if(operacao == 1){
        console.log('Adição!')
        const soma_valores = somar(valor1, valor2)
        console.log(`${valor1} + ${valor2} = ${soma_valores}`)

    } else if(operacao == 2){
        console.log('Subtração!')
        const subtracao_valores = subtrair(valor1, valor2)
        console.log(`${valor1} - ${valor2} = ${subtracao_valores}`)

    } else if(operacao == 3){
        console.log('Multiplicação!')
        const multiplicacao_valores = multiplicar(valor1, valor2)
        console.log(`${valor1} * ${valor2} = ${multiplicacao_valores}`)

    } else if(operacao == 4){
        console.log('Divisão!')
        const divisao_valores = dividir(valor1, valor2)
        console.log(`${valor1} / ${valor2} = ${divisao_valores.toFixed(2)}`)

    } else{
        console.log('Erro!')
    }
}       

function somar(num1, num2){
    return num1 + num2
}

function subtrair(num1, num2){
    return num1 - num2
}

function multiplicar(num1, num2){
    return num1 * num2
}

function dividir(num1, num2){
    return num1 / num2
}

main()