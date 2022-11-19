import {input} from "../io_utils.js";

function main() {
    let numero_inteiro = pedir_numero_inteiro();
    let unidade, dezena, centena;

    if (numero_inteiro >= 100 && numero_inteiro < 1000) {
        unidade = numero_inteiro % 10;
        numero_inteiro = (numero_inteiro - unidade) / 10;

        dezena = numero_inteiro % 10;

        centena = (numero_inteiro - dezena) / 10;

        console.log(`${centena} centena(s), ${dezena} dezena(s) e ${unidade} unidade(s)`);

    } else if (numero_inteiro >= 10 && numero_inteiro < 100 ) {
        unidade = numero_inteiro % 10;
        numero_inteiro = (numero_inteiro - unidade) / 10;

        dezena = numero_inteiro % 10;

        console.log(`${dezena} dezena(s) e ${unidade} unidade(s)`);

    } else {
        unidade = numero_inteiro;

        console.log(`${unidade} unidade(s)`);
    }
}

function pedir_numero_inteiro() {
    const numero_inteiro = Number(input("Digite um número inteiro menor que 1000: "));

    if (numero_inteiro < 1000) {
        return numero_inteiro;

    } else {
        console.log("O número deve ser menor que 1000...");
    }
}

main();