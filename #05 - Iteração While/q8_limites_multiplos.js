import { input } from '../io_utils.js';

function main() {
    const numero_inteiro = Number(input('Digite N: '));
    const limite_superior = Number(input('Digite o Limite Superior: '));
    let limite_inferior = Number(input('Digite o Limite Inferior: '));

    while (limite_inferior <= limite_superior) {
        if (eh_multiplo(limite_inferior, numero_inteiro)) {
            console.log(limite_inferior);
        }

        limite_inferior++;
    }
}

function eh_multiplo(valor, n) {
    if (valor % n === 0) {
        return true;
    }
}

main();