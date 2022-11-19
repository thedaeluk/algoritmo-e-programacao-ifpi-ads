// Leia N, calcule e escreva o valor de S.

import { input } from '../io_utils.js';

function main(){
    const n = Number(input('N: '));

    let j = n;
    let i = 1;
    let soma = 0; 
    let expressao = '';

    while (i <= n){
        if (i === n){
            expressao += `(${i} / ${j})`;
        } else {
            expressao += `(${i} / ${j}) + `;
        }
        soma += (i / j);
        i++;
        j--;
    }
    
    console.log(`\nS = ${expressao} = ${soma.toFixed(2)}`);
}

main();