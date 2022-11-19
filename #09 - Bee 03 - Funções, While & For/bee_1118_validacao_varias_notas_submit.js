import { readFileSync } from 'fs'
var input = readFileSync('./entrada_1118.txt', 'utf8')
var lines = input.split('\n')

function main(){
    let index = 0
    let nota1 = Number(lines[index++])

    while (nota1 < 0 || nota1 > 10) {
        console.log("nota invalida")
        nota1 = Number(lines[index++])
    }

    let nota2 = Number(lines[index++])

    while (nota2 < 0 || nota2 > 10) {
        console.log("nota invalida")
        nota2 = Number(lines[index++])
    }

    const media_notas = calcular_media(nota1, nota2);
    
    console.log(`media = ${media_notas.toFixed(2)}`);
    console.log('novo calculo (1-sim 2-nao)')

    let nova_operacao = Number(lines[index++])

    while (nova_operacao !== 2){
        if (nova_operacao === 1){
            
            let nota1 = Number(lines[index++])

            while (nota1 < 0 || nota1 > 10) {
                console.log("nota invalida")
                nota1 = Number(lines[index++])
            }

            let nota2 = Number(lines[index++])

            while (nota2 < 0 || nota2 > 10) {
                console.log("nota invalida")
                nota2 = Number(lines[index++])
            }

            const media_notas = calcular_media(nota1, nota2)

            console.log(`media = ${media_notas.toFixed(2)}`)
            console.log('novo calculo (1-sim 2-nao)')

            nova_operacao = Number(lines[index++])

        }else{
            console.log('novo calculo (1-sim 2-nao)')
            nova_operacao = Number(lines[index++])
        }
    }
}

function calcular_media(nota1, nota2){
    return (nota1 + nota2) / 2
}

main()