import {print, input} from './io_utils.js'

//Média 1

function main(){

    //Entrada
    const a = Number(input('Digite a primeira nota: '))
    const b = Number(input('Digite a segunda nota: '))

    //Processamento
    const MEDIA = ((a * 3.5) + (b * 7.5)) / 11

    //Saída
    print(`MEDIA = ${MEDIA.toFixed(5)}`)
}

main()

