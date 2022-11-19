import { input } from '../../io_utils.js'

// 9. Leia l (um) número entre 0 e 100, verifique e escreva se o número é ou não primo.

function main(){

    // Entrada
    const number = Number(input('Digite um número entre 0 e 100: '))

    // Processamento
    if(calculo_eh_primo(number)){
        console.log(`O número ${number} é primo!`)

    } else{
        console.log(`O número ${number} não é primo!`)
    }
}

function calculo_eh_primo(number){
    let divisor = 1
    let quant_divisor = 0

    while(divisor <= number){
        if(number % divisor == 0){
            quant_divisor += 1

        } 
        divisor += 1  
    } 

    if(quant_divisor == 2){
        return true

    } else{
        return false
    }
}

main()