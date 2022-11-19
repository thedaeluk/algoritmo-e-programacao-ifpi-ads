// Leia uma frase e mostre cada palavra da frase em uma linha separada.

import { get_text } from '../input_utils.js'

function main(){
    const frase = get_text('Frase: ')
    
    separar_palavras(frase)
}

function separar_palavras(frase){
    let palavra_separada = frase.split(' ')

    for (let i = 0; i < palavra_separada.length; i++){
        console.log(palavra_separada[i])
    }
}

main()