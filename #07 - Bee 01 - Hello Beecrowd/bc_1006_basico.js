import {print, input} from './io_utils.js'

//Média 2

function main(){

    //Entrada
    const a = Number(input('Digite a primeira nota: '))
    const b = Number(input('Digite a segunda nota: '))
    const c = Number(input('Digite a terceira nota: '))

    //Processamento
    const MEDIA = ((a * 2) + (b * 3) + (c * 5)) / 10

    //Saída
    print(`MEDIA = ${MEDIA.toFixed(1)}`)
}

main()