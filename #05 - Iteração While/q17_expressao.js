// Leia N, calcule e escreva o valor de S.

import { input } from '../io_utils.js';

function main(){
    const n = Number(input('N: '));

    let i = 1;
    let soma = 0;
    let expressao = '';

    while (i <= n){
        if (i === n){
            expressao += `(1 / ${i})`;
        } else {
            expressao += `(1 / ${i}) + `;
        }
        soma += (1 / i);
        i++;
    }
    console.log(`\nS = ${expressao} = ${soma.toFixed(2)}`);
}

main();