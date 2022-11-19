import {readFileSync} from 'fs'
var input = readFileSync('./entrada_1173.txt', 'utf8')
export var lines = input.split('\n')

function main(){
    const N = new Array(20)

    let X = preencher_vetor(N)
    let Y = trocar_vetor(X)
    
    for (let i = 0; i < Y.length; i++){
        console.log(`N[${i}] = ${Y[i]}`)
        
    }
}

function preencher_vetor(N){
    let index = 0
    for (let i = 0; i < N.length; i++){
        N[i] = Number(lines[index++])
    }
    return N
}

function trocar_vetor(Y){
    let novo_vetor = new Array(20)
    let tamanho = Y.length
    let primeiro
    let ultimo
    let j = 1
    for (let i = 0; i < tamanho; i++){
        let tamanho = Y.length
        primeiro = Y[i]
        ultimo = Y[tamanho - j] 
        novo_vetor[i] = ultimo
        novo_vetor[tamanho - j] = primeiro
        j++
    }
    return novo_vetor
}

main()