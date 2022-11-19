/* Leia N, calcule e escreva o maior quadrado menor ou igual a N. Por exemplo, se N for igual a 38, o
maior quadrado menor que 38 é 36 (quadrado de 6). */

import { input } from '../io_utils.js';

function main(){
    const n = Number(input('N: '));

    const maior_quadrado = verificar_maior_quadrado_menor_que_n(n);
    
    console.log(`Maior quadrado menor ou igual a N: ${maior_quadrado}`);
}

function verificar_maior_quadrado_menor_que_n(n){
    let i = 0;
    let maior_quadrado = 0;

    while (i < n){
        let quadrado = i * i;

        if (quadrado <= n){
            if (quadrado > maior_quadrado){
                maior_quadrado = quadrado;
            }
        }

        i++;
    }

    return maior_quadrado;
}

main();