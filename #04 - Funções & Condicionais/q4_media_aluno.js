import {input, print} from "../io_utils.js";

function main() {
    const nota1 = Number(input("Digite a primeira nota: "));
    const nota2 = Number(input("Digite a segunda nota: "));

    const media_notas = calculo_media(nota1, nota2);

    if (media_notas >= 7.0) {
        if (media_notas == 10.0) {
            print("Aprovado com Distinção");
            
        } else {
            print("Aprovado");
        }

    } else {
        print("Reprovado"); 
    }
}

function calculo_media(num1, num2) {
    return (num1 + num2) / 2;
}

main();