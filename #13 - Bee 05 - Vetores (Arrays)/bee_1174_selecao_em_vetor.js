import {readFileSync} from 'fs'
var input = readFileSync('./entrada_1173.txt', 'utf8')
export var lines = input.split('\n')

function main(){
    const A = new Array(100)

    let vetor_preenchido = preencher_vetor(A)

    for (let i = 0; i < A.length; i++){
        if (vetor_preenchido[i] <= 10){
            console.log(`A[${i}] = ${vetor_preenchido[i].toFixed(1)}`)
        }
    }
}

function preencher_vetor(A){
    let index = 0
    for (let i = 0; i < A.length; i++){
        A[i] = Number(lines[index++])
    }
    return A
}

main()