import { readFileSync } from 'fs'
var input = readFileSync('./entrada_1024.txt', 'utf8')
export var lines = input.split('\n')

function main(){
    let index = 0
    const n = Number(lines[index++])

    for (let i = 0; i < n; i++){
        let text = lines[index++]

        let first_cryptography = move_characters_to_the_right(text)
        let second_cryptography = invert_characters(first_cryptography)
        let third_cryptography = move_characters_to_the_left(second_cryptography)

        console.log(third_cryptography)
    }
}

function move_characters_to_the_right(text){
    let new_text = ''

    for (let i = 0; i < text.length; i++){
        let character = text[i]

        if (eh_letra_minuscula(character) || eh_letra_maiuscula(character)){
            let character_code = character.charCodeAt(0)
            new_text += String.fromCharCode(character_code + 3)  

        }else{
            new_text += character
        }
    }

    return new_text
}

function invert_characters(new_text){
    let inverted_text = ''

    for (let i = new_text.length - 1; i >= 0; i--){
        inverted_text += new_text[i]
    }

    return inverted_text
}

function move_characters_to_the_left(inverted_text){
    let truncated_text = ''
    
    for (let i = 0; i < inverted_text.length; i++){
        let character = inverted_text[i]
        let text_length = inverted_text.length - 1

        if (i >= (text_length / 2)){
            let character_code = character.charCodeAt(0)
            truncated_text += String.fromCharCode(character_code - 1)

        } else {
            truncated_text += character
        }
    }

    return truncated_text
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

main()
