/* Faça a criptografia de uma frase digitada pelo usuário. Na criptografia, a frase deverá ser invertida e as
consoantes deverão ser substituídas pelo caractere #. */

import { get_text } from '../input_utils.js'

function main(){
    const frase = get_text('Frase: ')
    console.log(frase)

    const frase_invertida = inverter_frase(frase)
    console.log(frase_invertida)

    const frase_sem_consoantes = substituir_consoantes(frase_invertida, '#')
    console.log(frase_sem_consoantes)
}

function inverter_frase(frase){
    let frase_invertida = ''

    for (let i = frase.length - 1; i >= 0; i--){
        frase_invertida += frase[i]
    }
    return frase_invertida
}

function substituir_consoantes(frase, caracter){
    let nova_frase = ''

    for (let i = 0; i < frase.length; i++){
        if (eh_consoante(frase[i])){
            nova_frase += caracter 

        }else{
            nova_frase += frase[i]
        }
    }
    return nova_frase
}

function eh_consoante(caracter){
    if (eh_letra(caracter) && !eh_vogal(caracter)){
        return true
    }
}

function eh_letra(caracter){
    if (eh_letra_maiuscula(caracter) || eh_letra_minuscula(caracter)){
        return true
    }
}

function eh_letra_maiuscula(letra){
    const codigo = letra.charCodeAt(0)

    if ((codigo >= 65) && (codigo <= 90)){
        return true
    }
}

function eh_letra_minuscula(letra){
    const codigo = letra.charCodeAt(0)

    if ((codigo >= 97) && (codigo <= 122)){
        return true
    }
}

function eh_vogal(caracter){
    const vogais = 'aeiouAEIOU'

    for (let i = 0; i <= vogais.length; i++){
        if (caracter === vogais[i]){
            return true
        }
    }
    return false
}

main()