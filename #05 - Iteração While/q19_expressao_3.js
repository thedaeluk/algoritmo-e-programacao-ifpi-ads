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
            if (eh_impar(i)){
                expressao += `(${i} / ${j})`;
                soma += (i / j);

            } else {
                expressao += `(${j} / ${i})`;
                soma -= (j / i);
            }

        } else {
            if (eh_impar(i)){
                expressao += `(${i} / ${j}) - `;
                soma += (i / j);

            } else {
                expressao += `(${j} / ${i}) + `;
                soma -= (j / i);
            }
        }
        
        i++;
        j--;
    }
    
    console.log(`\nS = ${expressao} = ${soma.toFixed(2)}`);
}

function eh_impar(num){
    return num % 2 !== 0;
}

main();