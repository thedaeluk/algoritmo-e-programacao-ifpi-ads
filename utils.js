import { readFileSync } from 'fs'
import prompt from 'prompt-sync'

export var input = prompt()

export function loadFile(filename){
    let words_file = readFileSync(filename, 'utf8')
    let loaded_words = words_file.split('\n')

    return loaded_words
}

export function pressContinue(){
    input('Pressione <Enter> para continuar...')
    console.clear()
}

export function getNumber(msg){
    let value = Number(input(msg))

    if (isNaN(value)){
        console.log('Por favor digite um valor numérico...')
        value = getNumber(msg)
    }
    return value
}

export function getNumberOnRange(msg, min, max){
    let number = getNumber(msg)

    while (!(number >= min && number <= max)){
        console.log(`O número (${number}) está fora da faixa [${min} - ${max}].`)
        number = getNumber(msg)
    }
    return number
}

export function getRandomNumber(min = 0, max = 100){
    return Math.floor(Math.random() * (max - min)) + min
}

export function calculateAverage(sum, amount){
    return sum / amount
}

export function calculatePercentage(count, total){
    return 100 * (count / total) 
}

export function isMultiple(num, mult){
    return num % mult === 0
}

export function calcular_mmc(num1 , num2){
    let resto, a, b
    a = num1
    b = num2

    while (resto !== 0){
        resto = a % b
        a = b
        b = resto
    }

    return (num1 * num2) / a
}

export function calcular_mdc(num1 , num2){
    let resto

    while (resto !== 0){
        resto = num1 % num2

        num1 = num2
        num2 = resto
    }

    return num1
}

export function getText(msg){
    const value = input(msg)

    if (value.length === 0){
        console.log('Texto vazio. Digite algo.')
        return get_text(msg)
    }
    return value
}
