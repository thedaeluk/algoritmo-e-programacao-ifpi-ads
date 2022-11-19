import {input, print} from "../io_utils.js";

function main() {
    const num = Number(input("Digite um número: "));
    
    if (eh_positivo(num)) {
        print("O número é positivo!");

    } else if (eh_negativo(num)) {
        print("O número é negativo!");

    } else {
        print("O número é igual a zero!");
    }
}

function eh_positivo(num) {
    if (num > 0) {
        return true;
    }
}

function eh_negativo(num) {
    if (num < 0) {
        return true;
    } 
}

main();