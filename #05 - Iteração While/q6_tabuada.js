import { input } from '../io_utils.js';

function main() {
    const numero = Number(input('Selecione a tabuada desejada (1 a 10): '));
    let tabuada;
    let i = 1;

    while (i <= 10) {
        tabuada = numero * i;
        console.log(`${numero} x ${i} = ${tabuada}`);
        i++;
    }
}

main(); 