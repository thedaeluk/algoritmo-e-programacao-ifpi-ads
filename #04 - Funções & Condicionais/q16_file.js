import {input} from "../io_utils.js";

function main() {
    const tipo_de_carne = input("Digite o tipo de carne (Filé, Alcatra ou Picanha): ");
    const quantidade_de_carne = Number(input("Digite a quantidade de carne (Em kg): ")); 

    const valor_total = calcular_valor_a_pagar(tipo_de_carne, quantidade_de_carne);

    let desconto_no_cartao = input("Você deseja realizar a compra no cartão Tabajara? (Sim / Não): ");

    let desconto = 0;
    let valor_a_pagar;

    if (desconto_no_cartao === "Sim") {
        desconto = valor_total * (5 / 100);
        valor_a_pagar = valor_total - desconto;

    } else if (desconto_no_cartao === "Não") {
        valor_a_pagar = valor_total;
    }

    console.log("\nCupom Fiscal:\n")
    console.log(`Tipo de carne: ${tipo_de_carne}`);
    console.log(`Quantidade de carne: ${quantidade_de_carne} kg`);
    console.log(`Preço total: R$ ${valor_total.toFixed(2)}`);
    console.log(`Desconto no cartão? ${desconto_no_cartao}`);
    console.log(`Valor do desconto: R$ ${desconto.toFixed(2)}`);
    console.log(`Valor a pagar: R$ ${valor_a_pagar.toFixed(2)}`);
}

function calcular_valor_a_pagar(tipo_de_carne, quantidade_de_carne) {
    if (quantidade_de_carne <= 5) {
        if (tipo_de_carne === "Filé") {
            return quantidade_de_carne * 4.90;  

        } else if (tipo_de_carne === "Alcatra") {
            return quantidade_de_carne * 5.90;

        } else {
            return quantidade_de_carne * 6.90;
        }

    } else {
        if (tipo_de_carne === "Filé") {
            return quantidade_de_carne * 5.80;

        } else if (tipo_de_carne === "Alcatra") {
            return quantidade_de_carne * 6.80;

        } else {
            return quantidade_de_carne * 7.80;
        }
    }
}

main();