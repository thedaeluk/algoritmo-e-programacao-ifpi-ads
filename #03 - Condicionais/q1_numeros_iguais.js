import { input } from '../../io_utils.js'

// 1. Leia 3 (três) números, verifique e escreva quantos números iguais existem entre os números.

function main(){
    
    // Entrada 
    const [number1, number2, number3] = input('Digite três números: ').split(' ').map(Number)

    // Processamento
    const numeros_iguais = equal_number(number1, number2, number3)

    // Saída
    console.log(numeros_iguais)

}

function equal_number(number1, number2, number3){
    if (number1 == number2 && number2 == number3){
        return `Os três números são iguais: ${number1} = ${number2} = ${number3}`

    } else if(number1 == number2){
        return `O primeiro e segundo número são iguais: ${number1} = ${number2}`
        
    } else if(number2 == number3){
        return `O segundo e terceiro número são iguais: ${number2} = ${number3}`
    
    } else if(number1 == number3){
        return `O primeiro e terceiro número são iguais: ${number1} = ${number3}`

    } else{ 
        return 'Os números são diferentes'

    }
}

main()