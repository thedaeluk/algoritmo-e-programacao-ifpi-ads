import { readFileSync } from 'fs'
var input = readFileSync('./entrada_1168.txt', 'utf8')
export var lines = input.split('\n')

function main(){
    let index = 0
    const n = Number(lines[index++])

    for (let i = 0; i < n; i++){
        let value = lines[index++]
        let leds_amount = 0

        for (let i = 0; i < value.length; i++){
            let num = value[i]
            leds_amount += countLeds(num)

        }
        console.log(`${leds_amount} leds`)
    }
}

function countLeds(num){
    if (num === '1'){
        return 2
    }else if (num === '2'){
        return 5
    }else if (num === '3'){
        return 5
    }else if (num === '4'){
        return 4
    }else if (num === '5'){
        return 5
    }else if (num === '6'){
        return 6
    }else if (num === '7'){
        return 3
    }else if (num === '8'){
        return 7
    }else if (num === '9'){
        return 6
    }else{
        return 6
    }
}

main()
