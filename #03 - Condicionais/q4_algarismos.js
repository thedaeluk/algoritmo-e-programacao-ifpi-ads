import { input } from '../../io_utils.js'

/* 4. Leia 1 (um) número de 2 (dois) dígitos, verifique e escreva se o algarismo da dezena é igual ou 
diferente do algarismo da unidade. */

function main(){

    // Entrada
    const number = input('Digite um número de dois dígitos: ')
    const algarismo_dezena = Number(number[0])
    const algarismo_unidade = Number(number[1])

    // Processamento
    if(igualdade_algarismo(algarismo_dezena, algarismo_unidade)){
        console.log(`O algarismo da dezena (${algarismo_dezena}) é igual ao algarismo da unidade (${algarismo_unidade}).`)

    } else {
        console.log(`O algarismo da dezena (${algarismo_dezena}) é diferente do algarismo da unidade (${algarismo_unidade}).`)

    }
    
}

function igualdade_algarismo(algarismo1, algarismo2){
    if(algarismo1 == algarismo2){
        return true
        
    } else {
        return false
    }
}

main()