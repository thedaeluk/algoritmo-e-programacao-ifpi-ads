// Leia N, calcule e escreva o valor de S.

import { input } from '../io_utils.js';

function main(){
    const n = Number(input('N: '));

    let expressao = '';
    let soma_da_expressao = 0;
    let i = 1;

    while (i <= n){
        if (eh_impar(i)){
            if (i < n){
                expressao += `(1 / ${i}) - `;
                soma_da_expressao += 1 / i;
            } else {
                expressao += `(1 / ${i})`;
                soma_da_expressao += 1 / i;
            }

        } else {
            if (i < n){
                expressao += `(1 / ${i}) + `;
                soma_da_expressao -= 1 / i;
            } else {
                expressao += `(1 / ${i})`;
                soma_da_expressao -= 1 / i;
            }
        }
        
        i++;
    }

    console.log(`\n${expressao} = ${soma_da_expressao}`);
}

function eh_impar(num){
    return num % 2 !== 0;
}

main();