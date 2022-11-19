import {readFileSync} from 'fs';
var input = readFileSync('./entrada_1038.txt', 'utf8');
var lines = input.split('\n');

function main(){
    //Entrada
    const [cod, quant] = lines[0].split(" ").map(Number);

    //Processamento
    const pagamento = calcular_valor_pagamento(cod, quant);

    //Saída
    console.log(`Total: R$ ${pagamento.toFixed(2)}`);
}

function calcular_valor_pagamento(cod, quant){
    if (cod === 1){
        let valor = 4.00 * quant;
        return valor;

    } else if (cod === 2){
        let valor = 4.50 * quant;
        return valor;

    } else if (cod === 3){
        let valor = 5.00 * quant;
        return valor;

    } else if (cod === 4){
        let valor = 2.00 * quant;
        return valor;

    } else if (cod === 5){
        let valor = 1.50 * quant;
        return valor;
    }  
}
    
main();