import {readFileSync} from "fs";
var input = readFileSync("./entrada_1116.txt", "utf8");
var lines = input.split("\n");

function main() {
    const quantidade = Number(lines[0]);
    let i = 0;

    while (i < quantidade) {
        const valores = lines[i + 1].split(" ").map(Number);
        let X = valores[0];
        let Y = valores[1];

        if (Y === 0) {
            console.log("divisao impossivel");

        } else {
            const divisao = calcular_divisao(X, Y);
            console.log(divisao.toFixed(1));
        }
        i++;
    }
}

function calcular_divisao(X, Y) {
    return X / Y;
}

main();