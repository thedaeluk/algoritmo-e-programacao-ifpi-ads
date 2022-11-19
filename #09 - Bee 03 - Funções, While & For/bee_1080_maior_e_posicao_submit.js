import {readFileSync} from "fs";
var input = readFileSync("./entrada_1080.txt", "utf8");
var lines = input.split("\n");

function main() {
    const num = lines.map(Number);
    const maior_e_posicao = determinar_maior_e_posicao(num);

    console.log(maior_e_posicao[0]);
    console.log(maior_e_posicao[1]);
}

function determinar_maior_e_posicao(num) {
    let i = 0;
    let posicao;
    let maior = num[0];

    while (i <= 100) {
        if (num[i] > maior) {
            maior = num[i];
            posicao = i + 1;
        }
        i++;
    }
    return [maior, posicao];
}

main();
