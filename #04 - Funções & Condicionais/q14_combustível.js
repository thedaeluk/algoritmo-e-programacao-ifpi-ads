import {input} from "../io_utils.js";

function main() {
    const quantidade_litros = Number(input("Digite a quantidade de litros vendidos: "));
    const tipo_de_combustível = input("Digite o tipo de combustível (A - Álcool / G para Gasolina): ");

    const valor_a_ser_pago = calcular_valor_a_ser_pago(quantidade_litros, tipo_de_combustível);

    console.log(`O valor a ser pago é: R$ ${valor_a_ser_pago}`);
}

function calcular_valor_a_ser_pago(litros, combustível) {
    if (combustível === "A") {
        if (litros <= 20) {
            let valor = 1.90 * litros;
            let desconto = valor * 0.03;

            return valor - desconto; 

        } else {
            let valor = 1.90 * litros;
            let desconto = valor * 0.05;

            return valor - desconto; 
        } 

    } else if (combustível === "G") {
        if (litros <= 20) {
            let valor = 2.50 * litros;
            let desconto = valor * 0.04;

            return valor - desconto; 

        } else {
            let valor = 2.50 * litros;
            let desconto = valor * 0.06;

            return valor - desconto; 
        } 
    }
}

main(); 