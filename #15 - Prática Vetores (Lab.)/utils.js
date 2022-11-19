import prompt from 'prompt-sync'
export var input = prompt()

export function pressContinue(){
    input('Pressione [Enter] para continuar...')
    
    console.clear()
}

export function pedir_numero(msg){
    let valor = Number(input(msg))

    if (isNaN(valor)){
        console.log('Por favor, digite um valor numérico...')
        valor = pedir_numero(msg)
    }

    return valor
}

export function pedir_numero_na_faixa(msg, min, max){
    let numero = pedir_numero(msg)

    while (!(numero >= min && numero <= max)){
        console.log(`O número (${numero}) está fora da faixa [${min} - ${max}].`)
        numero = pedir_numero(msg)
    }

    return numero
}

export function pedir_texto(msg){
    const valor = input(msg)

    if (valor.length === 0){
        console.log('Texto vazio. Digite algo...')

        return pedir_texto(msg)
    }

    return valor
}
