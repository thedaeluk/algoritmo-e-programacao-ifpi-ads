import {input, print} from "../io_utils.js";

function main() {
    const letter = input("Digite uma letra (F/M): ").toUpperCase();
    
    if (eh_masculino(letter)) {
        print("Masculino.");

    } else if (eh_feminino(letter)) {
        print("Feminino.");

    } else {
        print("Sexo inválido.");
    }
}

function eh_masculino(letter) {
    if (letter === "M") {
        return true;
    } 
}

function eh_feminino(letter) {
    if (letter === "F") {
        return true;
    } 
}

main();