import { input } from '../io_utils.js';

function main() {
    let a0 = Number(input('Digite um valor inicial: '));
    const limite = Number(input('Digite um limite: '));
    let r = Number(input('Digite uma razão R: '));

    while (a0 <= limite) {
        console.log(a0);
        a0 += r;
    }
}

main();