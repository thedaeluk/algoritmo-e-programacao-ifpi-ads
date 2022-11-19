import { input } from './io_utils.js'

function main(){
    const mensagem = input('Digite a mensagem em binário: ')
    const bytes = mensagem.split('-')
    let byte
    let character_value 
    
    for (let i = 0; i < bytes.length; i++){
        byte = bytes[i] 

        if (byte.length !== 8) {
            console.log("Mensagem corrompida: Sequência de bits inválida.")
            break
    
        }else{
            character_value = converter_para_decimal(byte)
            console.log(character_value)

            if (character_value >= 97 && character_value <= 122){
                console.log("Sequência de bits OK")
    
            }else if (character_value>= 48 && character_value <= 57){
                console.log('Sequência de bits OK')
    
            }else if (character_value === 32){
                console.log('Sequência de bits OK')

            }else{
                console.log(`Mensagem corrompida: Caracteres inválidos: ${character_value} `)
            }
        }
    }
}


function converter_para_decimal(byte){
    let decimal = 0
    let j = 7

    for (let i = 0; i < byte.length; i++){
        decimal += Number(byte[i]) * Math.pow(2, j)
        j--
    }

    return decimal
}

main()