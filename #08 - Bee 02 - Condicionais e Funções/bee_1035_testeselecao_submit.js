import {readFileSync} from 'fs';
var input = readFileSync('./entrada_1035.txt', 'utf8');
var lines = input.split('\n');

function main(){
    //Entrada
    const [A, B, C, D] = lines[0].split(' ').map(Number);
    //Processamento
    const resultado = calcular_condicao(A, B, C, D);
    //Saída
    console.log(resultado);
}

function calcular_condicao(A, B, C, D){
    if (B > C && D > A && C + D > A + B && C > 0 && D > 0 && eh_par(A)){
        return 'Valores aceitos';
    } else {
        return 'Valores nao aceitos';
    }
}

function eh_par(valor){
    if (valor % 2 === 0){
        return true;
    } else {
        return false;
    }
}

main();