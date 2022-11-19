import {readFileSync} from 'fs'
var input = readFileSync('./entrada_1173.txt', 'utf8')
export var lines = input.split('\n')

    function main(){
        let index = 0
        const T = Number(lines[index++])
        const vetor = new Array(60)
        let vetor_fibonacci = preencher_vetor(vetor)

        for (let i = 0; i < T; i++){
            let fib = Number(lines[index++])
            console.log(`Fib(${fib}) = ${vetor_fibonacci[fib]}`)
        }
    }

    function preencher_vetor(N){
        let anterior = 0
        let proximo = 1
        let tamanho = N.length
        for (let i = 2; i <= tamanho; i++){
            N[0] = 0
            N[1] = 1
            N[i] = anterior + proximo
            anterior = proximo
            proximo = N[i]
        }
        return N
    }

    main()