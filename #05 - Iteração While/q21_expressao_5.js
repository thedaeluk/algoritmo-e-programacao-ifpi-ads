// Leia N, calcule e escreva o valor de S.

import { input } from '../io_utils.js'

function main(){
    const n = Number(input('N: '))

    let expressao = ''
    let soma_da_expressao = 0
    let j = 1
    let i = 1

    while (i <= n){
        if (i === n){
            expressao += `(${j} / ${i})`
            
        } else {
            expressao += `(${j} / ${i}) + `
        }

        soma_da_expressao += j / i 

        j += 2
        i++
    }

    console.log(`\n${expressao} = ${soma_da_expressao.toFixed(2)}`)
}

main()