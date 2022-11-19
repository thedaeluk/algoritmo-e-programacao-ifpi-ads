import { input } from '../utils.js'

function main(){
    const integer1 = Number(input('Inteiro 1: '))
    const integer2 = Number(input('Inteiro 2: '))
    let num
    let sum = 0

    if (integer1 < integer2){
        num = integer1

        while ((num >= integer1 && num <= integer2)){
            if (!(is_multiple_of_13(num))){
                sum += num
            } 
            num++
        }

    }else if (integer2 < integer1){
        num = integer2

        while ((num >= integer2 && num <= integer1)){
            if (!(is_multiple_of_13(num))){
                sum += num
            }

            num++
        }
    }

    console.log(sum)
}

function is_multiple_of_13(num){
    return num % 13 === 0
}

main()