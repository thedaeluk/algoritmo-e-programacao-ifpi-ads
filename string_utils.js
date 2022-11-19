export function isLetter(character){
    if (isUppercaseLetter(character) || isLowercaseLetter(character)){
        return true
    }
}

export function isUppercaseLetter(letter){
    const code = letter.charCodeAt(0)
    
    if ((code >= 65) && (code <= 90)){
        return true
    }
}

export function isLowercaseLetter(letter){
    const code = letter.charCodeAt(0)

    if ((code >= 97) && (code <= 122)){
        return true
    }
}

// let codigo_caractere = caractere.charCodeAt(0) - Determina o código do caractere;
// let texto = String.fromCharCode(codigo_caractere) - Cria uma nova string a partir do código;

export function invertCharacters(new_text){
    let inverted_text = ''

    for (let i = new_text.length - 1; i >= 0; i--){
        inverted_text += new_text[i]
    }
    return inverted_text
}