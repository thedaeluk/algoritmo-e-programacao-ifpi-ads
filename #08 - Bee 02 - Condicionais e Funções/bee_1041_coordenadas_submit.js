import {readFileSync} from 'fs';
var input = readFileSync('./entrada_1041.txt', 'utf8');
var lines = input.split('\n');

function main(){
    //Entrada
    const coordenadas_ponto = lines[0].split(" ");
    const valor_x = Number(coordenadas_ponto[0]);
    const valor_y = Number(coordenadas_ponto[1]);

    //Processamento
    const resultado = determinar_quadrante(valor_x, valor_y);

    //Saída
    console.log(resultado);
}

function determinar_quadrante(x, y){
    if (x > 0 && y > 0){
        return "Q1";

    } else if (x < 0 && y > 0){
        return "Q2";

    } else if (x < 0 && y < 0){
        return "Q3";

    } else if (x > 0 && y < 0){
        return "Q4";

    } else if ((x > 0 || x < 0) && y === 0){
        return "Eixo X";

    } else if (x === 0 && (y > 0 || y < 0)){
        return "Eixo Y";

    } else {
        return "Origem";
    }
}

main();