import { input } from '../../io_utils.js'

/* Existem números de 4 dígitos (entre 1000 e 9999) que obedecem à seguinte característica: se 
dividimos o número em dois números de dois dígitos, um composto pela dezena e pela unidade, e outro 
pelo milhar e pela centena, se somarmos estes dois novos números gerando um terceiro, o quadrado 
deste terceiro número é exatamente o número original de quatro dígitos. Por exemplo:
2025 -/ dividindo: 20 e 25 -/ somando temos 45 -/ 45° = 2025. */

function main(){
    const number = Number(input('Insira um número de 4 dígitos: '))

    if(verificar_caracteristica(number)){
        console.log('Obedece a característica!')

    } else{
        console.log('Não obedece a característica!')
    }
}

function verificar_caracteristica(number){

    const num1 = Math.trunc(number / 100)
    const num2 = (number / 1) % 100
    
    const soma = num1 + num2
    const quadrado = soma * soma

    if(quadrado == number){
        return true

    } else{
        return false
    }
}

main()