import { input } from '../utils.js'

function main(){
    const X = new Array(10)

    for (let i = 0; i < X.length; i++){
        X[i] = Number(input('Valor: '))
    }

    for (let i = 0; i < X.length; i++){
        if (X[i] === 0 || X[i] < 0){
            X[i] = 1
        }
        console.log(`X[${i}] = ${X[i]}`)
    }
}

main()