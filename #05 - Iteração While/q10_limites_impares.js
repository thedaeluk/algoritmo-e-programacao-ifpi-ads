import { input } from '../io_utils.js';

function main() {
    const limite_superior = Number(input('Digite o Limite Superior: '));
    let limite_inferior = Number(input('Digite o Limite Inferior: '));

    while (limite_inferior <= limite_superior) {
        if (eh_impar(limite_inferior)) {
            console.log(limite_inferior);
        }

        limite_inferior++;
    }
}

function eh_impar(n) {
    if (n % 2 !== 0) {
        return true;
    }
}

main();