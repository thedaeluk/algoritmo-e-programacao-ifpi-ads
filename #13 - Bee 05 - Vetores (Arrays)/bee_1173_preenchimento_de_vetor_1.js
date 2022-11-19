import { input } from '../utils.js'

function main(){
    const N = new Array(10)

    let vetor_preenchido = preencher_vetor(N)

    for (let i = 0; i < N.length; i++){
        console.log(`N[${i}] = ${vetor_preenchido[i]}`)
    }
}

function preencher_vetor(N){
    let V = Number(input('Valor: '))
    N[0] = V

    for (let i = 1; i < N.length; i++){
        N[i] = V * 2
        V++
    }
    return N
}

main()