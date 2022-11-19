import {input, print} from "../io_utils.js";

function main() {
    const preco1 = Number(input("Digite o preço do primeiro produto: "));
    const preco2 = Number(input("Digite o preço do segundo produto: "));
    const preco3 = Number(input("Digite o preço do terceiro produto: "));

    if (menor_preco(preco1, preco2, preco3) === preco1) {
        print("O produto 1 deve ser comprado");

    } else if (menor_preco(preco1, preco2, preco3) === preco2) {
        print("O produto 2 deve ser comprado");

    } else {
        print("O produto 3 deve ser comprado");
    }
}

function menor_preco(preco1, preco2, preco3) {
    if (preco1 < preco2 && preco1 < preco3) {
        return preco1;

    } else if (preco2 < preco1 && preco2 < preco3) {
        return preco2;

    } else {
        return preco3;
    }
}

main();