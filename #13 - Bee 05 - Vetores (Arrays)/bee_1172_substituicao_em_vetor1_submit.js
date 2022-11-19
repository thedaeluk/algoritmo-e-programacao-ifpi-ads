import {readFileSync} from "fs"
var input = readFileSync("./entrada_1172.txt", "utf8")
export var lines = input.split("\n")

function main(){
    const X = new Array(10)
    let index = 0

    for (let i = 0; i < X.length; i++){
        X[i] = Number(lines[index++])
    }

    const new_arr = new Array(10)

    for (let i = 0; i < new_arr.length; i++){
        if (X[i] === 0 || X[i] < 0){
            new_arr[i] = 1
        }else{
            new_arr[i] = X[i]
        }
        console.log(`X[${i}] = ${new_arr[i]}`)
    }
}

main()