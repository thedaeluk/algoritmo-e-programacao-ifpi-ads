import {input} from "../io_utils.js";

function main() {
    const quantidade = Number(input("Digite a quantidade de pares: "));
    let i = 0;

    while (i < quantidade) {
        const [X, Y] = input("Digite X e Y: ").split(" ").map(Number);

        if (Y === 0) {
            console.log("divisao impossivel");

        } else {
            const divisao = calcular_divisao(X, Y);
            console.log(divisao);
        }

        i++;
    }
}

function calcular_divisao(X, Y) {
    return X / Y;
}

main();
