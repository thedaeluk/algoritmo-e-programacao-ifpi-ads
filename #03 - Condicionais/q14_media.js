import { input } from '../../io_utils.js'

// Leia 5 (cinco) números inteiros, calcule a sua média e escreva os que são maiores que a média.

function main(){
    //Entrada
    const numeros_inteiros = input('Digite cinco números inteiros: ').split(' ').map(Number)
    const n = 5

    //Processamento
    const media_numeros = calcular_media(numeros_inteiros, n)
    console.log(`A média dos números é: ${media_numeros}.`)

    console.log('Os seguintes números são maiores que a média: ')

    for (let i = 0; i < n; i++){
        if (numeros_inteiros[i] > media_numeros){
            console.log(numeros_inteiros[i]);
        }
    }        
}

function calcular_media(numeros_inteiros, n){
    let media
    let soma = 0
    for (let i = 0; i < n; i++){
        soma = soma + numeros_inteiros[i]
    }    
    media = soma / n
    return media
}

main()