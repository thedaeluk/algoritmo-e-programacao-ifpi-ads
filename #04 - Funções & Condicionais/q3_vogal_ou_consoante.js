import {input, print} from "../io_utils.js";

function main() {
    const letter = input("Digite uma letra: ").toLowerCase();
    
    if (eh_vogal(letter)) {
        print("Vogal!");

    } else {
        print("Consoante!");
    }
}

function eh_vogal(letter) {
    if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
        return true
    }
}

main();