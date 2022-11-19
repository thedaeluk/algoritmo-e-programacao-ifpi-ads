import {input} from "../io_utils.js";

function main() {
    const day_number = Number(input("Digite o número do dia da semana: "));

    const day_of_week = show_day_of_week(day_number);

    console.log(day_of_week);
}

function show_day_of_week(number) {
    if (number === 1) {
        return "Domingo";

    } else if (number === 2) {
        return "Segunda";

    } else if (number === 3) {
        return "Terça";

    } else if (number === 4) {
        return "Quarta";

    } else if (number === 5) {
        return "Quinta";

    } else if (number === 6) {
        return "Sexta";

    } else if (number === 7) {
        return "Sabado";

    } else {
        return "Valor Inválido"
    }
}

main();