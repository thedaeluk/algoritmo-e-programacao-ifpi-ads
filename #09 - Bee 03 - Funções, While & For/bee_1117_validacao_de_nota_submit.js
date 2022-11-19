import {readFileSync} from "fs";
var input = readFileSync("./entrada_1117.txt", "utf8");
var lines = input.split("\n");

function main(){
    let nota1 = Number(lines[0]);
    let i = 1;

    while (nota1 < 0 || nota1 > 10) {
        console.log("nota invalida");
        nota1 = Number(lines[i]);
        i++
    }

    let nota2 = Number(lines[i]);

    while (nota2 < 0 || nota2 > 10) {
        console.log("nota invalida");
        i++;
        nota2 = Number(lines[i]);
    }
    
    const media_notas = calcular_media(nota1, nota2);
    
    console.log(`media = ${media_notas.toFixed(2)}`);
    
}

function calcular_media(nota1, nota2) {
    return (nota1 + nota2) / 2;
}

main();