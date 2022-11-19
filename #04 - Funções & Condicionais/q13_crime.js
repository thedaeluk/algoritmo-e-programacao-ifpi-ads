import {input} from "../io_utils.js";

function main() {
    console.log("Responda as seguintes perguntas (1 para sim / 2 para não).");

    const pergunta_a = Number(input("Telefonou para a vítima? "));
    const pergunta_b = Number(input("Esteve no local do crime? "));
    const pergunta_c = Number(input("Mora perto da vítima? "));
    const pergunta_d = Number(input("Devia para a vitima? "));
    const pergunta_e = Number(input("Já trabalhou com a vítima? "));

    const participacao_no_crime = verificar_participacao_no_crime(pergunta_a, pergunta_b, pergunta_c, pergunta_d, pergunta_e);

    console.log(participacao_no_crime);
}

function verificar_participacao_no_crime(a, b, c, d, e) {
    let contador = a + b + c + d + e;

    if (contador === 2 ) {
        return "Suspeito";

    } else if (contador >= 3 && contador < 4) {
        return "Cumplice";

    } else if (contador === 5 ) {
        return "Assassino";

    } else {
        return "Inocente";

    }  
}

main();