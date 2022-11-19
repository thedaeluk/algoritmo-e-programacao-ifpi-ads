import {readFileSync} from 'fs';
var input = readFileSync('./entrada_1037.txt', 'utf8');
var lines = input.split('\n');

function main() {
    //Entrada
    const num = Number(lines[0]);
    //Processamento
    const resultado = calcular_intervalo(num);
    //Saída
    console.log(resultado);
}

function calcular_intervalo(num) {
    if (num >= 0 && num <= 25) {
        return "Intervalo [0,25]";

    } else if (num > 25 && num <= 50) {
        return "Intervalo (25,50]";

    } else if (num >50 && num <= 75) {
        return "Intervalo (50,75]";

    } else if (num > 75 && num <= 100) {
        return "Intervalo (75,100]";
        
    } else {
        return "Fora de intervalo";
    }
}
    
main();