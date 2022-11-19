import { input } from '../../io_utils.js'

// 5. Leia 3 (três) números e escreva-os em ordem crescente.

function main(){

    // Entrada
    const number1 = Number(input('Digite um número 1: '))
    const number2 = Number(input('Digite um número 2: '))
    const number3 = Number(input('Digite um número 3: '))

    // Processamento
    const ordem_crescente = ordenador_crescente(number1, number2, number3)

    // Saída
    console.log(`A ordem crescente é: ${ordem_crescente}`)

}

function ordenador_crescente(num1, num2, num3){

    let primeiro, segundo, terceiro

    if(num1 < num2 && num1 < num3){
        primeiro = num1

        if(num2 < num3){
            segundo = num2
            terceiro = num3

        } else {
            segundo = num3
            terceiro = num2
        }

    } else if(num1 > num2 && num1 > num3){
        terceiro = num1

        if(num2 < num3){
            primeiro = num2
            segundo = num3

        } else{
            primeiro = num3
            segundo = num2
        }
        
    } else{
        segundo = num1

        if(num2 > num3){
            primeiro = num3 
            terceiro = num2

        } else{
            primeiro = num2
            terceiro = num3
        }
    }
    
    const ordem = `${primeiro} < ${segundo} < ${terceiro}`

    return ordem
}

main()