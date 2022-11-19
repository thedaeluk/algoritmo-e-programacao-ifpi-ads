import { input } from '../../io_utils.js'

// 3. Leia 3 (três) números, verifique e escreva o maior entre os números lidos. 

function main(){

    //Entrada
    const number1 = Number(input('Digite um número 1: '))
    const number2 = Number(input('Digite um número 2: '))
    const number3 = Number(input('Digite um número 3: '))

    //Processamento
    const numero_maior = maior_num(number1, number2, number3)

    //Saída
    console.log(`O maior número é ${numero_maior}`)

}

function maior_num(number1, number2, number3){

    let maior_num

    if(number1 > number2 && number1 > number3){
        maior_num = number1

    } else if(number2 > number1 && number2 > number3){
        maior_num = number2

    } else{
        maior_num = number3
    }
    
    return maior_num

}

main()