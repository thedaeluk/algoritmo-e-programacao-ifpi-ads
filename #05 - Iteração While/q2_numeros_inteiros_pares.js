import { input } from '../io_utils.js';

function main() {
    const inteiro_n = Number(input('Digite um valor N: '));
    let i = 1;

    while (i <= inteiro_n) {
        if (eh_par(i)) {
            console.log(i);
        }

        i++;
    }
}

function eh_par(n) {
    if (n % 2 === 0) {
        return true;
    }
}

main();