import {input} from "../io_utils.js";

function main() {
    const quantidade_morangos = Number(input("Digite a quantidade de morangos (kg): "));
    const quantidade_maças = Number(input("Digite a quantidade de maçãs (kg): "));

    const total_a_ser_pago = calcular_total_a_ser_pago(quantidade_morangos, quantidade_maças);

    console.log(`O total a ser pago é: R$ ${total_a_ser_pago.toFixed(2)}`);
}

function calcular_total_a_ser_pago(quantidade1, quantidade2) {
    let valor1, valor2, total, desconto;

    if (quantidade1 <= 5) {
        valor1 = 2.50 * quantidade1;

        if (quantidade2 <= 5) {
            valor2 = 1.80 * quantidade2;

        } else {
            valor2 = 1.50 * quantidade2;
        }
        
    } else {
        valor1  = 2.20 * quantidade1; 

        if (quantidade2 <= 5) {
            valor2 = 1.80 * quantidade2;

        } else {
            valor2 = 1.50 * quantidade2;
        }
    } 

    total = valor1 + valor2;

    if (quantidade1 + quantidade2 > 8 || total > 25) {
        desconto = total * (10 / 100);
        total = total - desconto;
    }

    return total;
}

main();