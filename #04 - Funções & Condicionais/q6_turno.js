import {input, print} from "../io_utils.js";

function main() {
    const turno = input("Digite o turno que o aluno estuda (M para matunito, V para Vespernino ou N para Noturno): ");

    const boas_vindas = selecionarBoasVindas(turno);

    print(boas_vindas);
}

function selecionarBoasVindas(turno) {
    if (turno == "M") {
        return "Bom Dia!";

    } else if (turno == "V") {
        return "Boa Tarde!";

    } else if (turno == "N") {
        return "Boa Noite!";

    } else {
        return "Valor Inválido";
    }
}

main();
