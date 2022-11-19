import {input} from "../io_utils.js";

function main() {
    const num = Number(input("Digite um número: "));

    if (eh_inteiro(num)) {
        console.log("O número é inteiro.");

    } else {
        console.log("O número é decimal.")
    }
}

function eh_inteiro(num) {
    if (num % 1 === 0) {
        return true;

    } else {
        return false;
    }
}

main();