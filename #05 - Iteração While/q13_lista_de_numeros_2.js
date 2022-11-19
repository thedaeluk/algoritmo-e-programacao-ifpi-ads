import { input } from '../io_utils.js';

function main() {
    const n = Number(input('N: '));

    let i = 1;
    let numero = Number(input(`Número ${i}: `)); 
    let maior = numero;
    i++;

    while (i <= n) {
        numero = Number(input(`Número ${i}: `)); 

        if (numero > maior) {
            maior = numero;
        }

        i++;
    }

    console.log(`Maior número: ${maior}`);
}

main();