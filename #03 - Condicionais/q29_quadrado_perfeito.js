import { input } from '../../io_utils.js'

/* 29. Um número é um quadrado perfeito quando a raiz quadrada do número é igual à soma das dezenas 
formadas pelos seus dois primeiros e dois últimos dígitos.
Exemplo: 9801 = 99 = 98 + 01. O número 9801 é um quadrado perfeito. 
Escreva um algoritmo que leia um número de 4 dígitos e verifique se ele é um quadrado perfeito. */

function main(){
    const number = Number(input('Insira um número de 4 dígitos: '))

    if(eh_quadrado_perfeito(number)){
        console.log('É quadrado perfeito!')

    } else{
        console.log('Não é quadrado perfeito!')
    }
}

function eh_quadrado_perfeito(number){
    const raiz = Math.sqrt(number)

    const dezena1 = Math.trunc(number / 100)
    const dezena2 = (number / 1) % 100

    if(raiz == dezena1 + dezena2){
        return true

    } else{
        return false
    }
}

main()