import { input } from '../io_utils.js';

function main() {
    const inteiro_n = Number(input('Digite um valor N: '));
    let i = 1;

    while (i <= inteiro_n) {
        console.log(i);
        i++;
    }
}

main();