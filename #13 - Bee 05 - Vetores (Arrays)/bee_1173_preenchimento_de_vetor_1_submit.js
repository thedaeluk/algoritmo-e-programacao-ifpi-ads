import {readFileSync} from "fs"
var input = readFileSync("./entrada_1173.txt", "utf8")
export var lines = input.split("\n")

function main(){
    const N = new Array(10)

    let vetor_preenchido = preencher_vetor(N)

    for (let i = 0; i < N.length; i++){
        console.log(`N[${i}] = ${vetor_preenchido[i]}`)
    }
}

function preencher_vetor(N){
    let index = 0
    let V = Number(lines[index++])

    N[0] = V

    for (let i = 1; i < N.length; i++){
        N[i] = V * 2
        V *= 2
    }
    return N
}

main()