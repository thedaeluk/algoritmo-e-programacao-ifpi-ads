import {input} from '../io_utils.js';

function main(){
    //Entrada
    const [A, B, C, D] = input('Digite o valor de A, B, C, D: ').split(' ').map(Number);

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