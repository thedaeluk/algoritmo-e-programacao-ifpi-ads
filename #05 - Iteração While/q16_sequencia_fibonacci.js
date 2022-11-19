/* Leia um número N, calcule e escreva os N primeiros termos de seqüência de Fibonacci
(0,1,1,2,3,5,8,...). O valor lido para N sempre será maior ou igual a 2. */

import { input } from '../io_utils.js';

function main(){
    const n = validar_n();

    let anterior = 0;
    console.log(anterior);

    let proximo = 1;
    console.log(proximo);

    let i = 0;

    while (i < n){
        let sequencia_fibonacci = anterior + proximo;
        console.log(sequencia_fibonacci);
        anterior = proximo;
        proximo = sequencia_fibonacci

        i++;
    }
}

function validar_n(){
    let n = Number(input('N: '));

    while (n < 2){
        console.log('O valor lido para N deve ser maior ou igual a 2:');
        n = Number(input('N: '));
    }
    return n;
}

main();