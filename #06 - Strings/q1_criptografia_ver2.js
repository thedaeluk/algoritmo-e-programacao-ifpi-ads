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
    const vogais = 'aeiouAEIOU'

    for (let i = 0; i <= vogais.length; i++){
        if (caracter === vogais[i]){
            return false
        }
    }
    return true
}

main()