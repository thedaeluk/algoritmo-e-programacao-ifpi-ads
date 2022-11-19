// Leia N, calcule e escreva os N primeiros termos de seqüência (1, 3, 6, 10, 15,...).

import { input } from '../io_utils.js';

function main(){
    const n = Number(input('N: '));

    let i = 0;
    let sequencia = 0;
    let salto = 1;

    while (i < n){
        sequencia = sequencia + salto;
        console.log(sequencia);
        salto++; 
        i++;
    }
}

main();